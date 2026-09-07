const path = require('path');
const puppeteer = require(path.join(__dirname, 'node_modules', 'puppeteer-core'));

async function main() {
  console.log('Launching Chrome with puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 2 });

  const filePath = 'file:///' + path.resolve(__dirname, 'cracked_preview.html').replace(/\\/g, '/');
  console.log('Navigating to:', filePath);
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // wait for fonts
  await new Promise(r => setTimeout(r, 1200));

  const outPng = path.resolve(__dirname, '..', 'public', 'assets', 'CaseStudies', 'CrackedAi.png');
  const outJpg = path.resolve(__dirname, '..', 'public', 'assets', 'CaseStudies', 'CrackedAi.jpg');
  const testPng = path.resolve(__dirname, 'test.png');

  await page.screenshot({ path: outPng });
  await page.screenshot({ path: outJpg, type: 'jpeg', quality: 95 });
  await page.screenshot({ path: testPng });

  console.log('Saved to:');
  console.log(' -', outPng);
  console.log(' -', outJpg);
  console.log(' -', testPng);

  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
