const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function getScreenshot() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const port = 9225;
  const userDataDir = path.join(process.env.TEMP || 'C:\\temp', 'chrome_cdp_' + Date.now());

  console.log('Spawning chrome...');
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const pages = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json/list`, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => resolve(JSON.parse(body)));
      }).on('error', reject);
    });

    const targetPage = pages[0];
    console.log('Target page WS:', targetPage.webSocketDebuggerUrl);

    const ws = new WebSocket(targetPage.webSocketDebuggerUrl);

    let msgId = 1;
    const pending = new Map();

    ws.addEventListener('message', async (ev) => {
      try {
        let text = ev.data;
        if (typeof text !== 'string') {
          if (text.text) {
            text = await text.text();
          } else {
            text = text.toString();
          }
        }
        const data = JSON.parse(text);
        if (data.id && pending.has(data.id)) {
          const resolve = pending.get(data.id);
          pending.delete(data.id);
          resolve(data.result);
        }
      } catch (e) {
        console.error('Error handling message:', e);
      }
    });

    const send = (method, params = {}) => new Promise((resolve) => {
      const currentId = msgId++;
      pending.set(currentId, resolve);
      ws.send(JSON.stringify({ id: currentId, method, params }));
    });

    if (ws.readyState !== 1) {
      await new Promise(r => ws.addEventListener('open', r));
    }
    console.log('WebSocket connected!');

    await send('Page.enable');

    const htmlPath = path.resolve(__dirname, 'cracked_preview.html');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    console.log('Navigating to:', fileUrl);
    await send('Page.navigate', { url: fileUrl });

    await new Promise(r => setTimeout(r, 2500));

    console.log('Setting device metrics...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1200,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1000));

    console.log('Capturing screenshot...');
    const result = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    if (!result || !result.data) {
      console.error('No screenshot data returned:', result);
    } else {
      const buffer = Buffer.from(result.data, 'base64');
      const outPath = path.join(__dirname, 'test.png');
      fs.writeFileSync(outPath, buffer);
      console.log('Screenshot successfully saved! Bytes:', buffer.length);
    }

    ws.close();
  } catch (err) {
    console.error('Error in screenshot:', err);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    process.exit(0);
  }
}

getScreenshot();
