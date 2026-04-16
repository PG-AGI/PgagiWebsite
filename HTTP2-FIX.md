# HTTP/1.1 → HTTP/2 Migration

## The Problem

Your site at `pgagi.in` is served by **nginx/1.24.0 on Ubuntu** over **HTTP/1.1**.

HTTP/1.1 allows only **one request per connection**, and browsers cap connections to any single host at **6**. Every resource — CSS, JS, images, fonts — competes for those 6 slots.

## What It's Causing

When a visitor loads `pgagi.in`, the browser opens 6 connections and immediately fills them:

```
Connection 1  →  pgagi.in HTML
Connection 2  →  0142d8de18e59dec.css  (18.4 KB)
Connection 3  →  4ba6cede6ad7f85a.css   (3.3 KB)
Connection 4  →  d082e7fc7d57cdbd.css   (7.5 KB)
Connection 5  →  JS chunk
Connection 6  →  JS chunk

Hero image (fetchpriority="high")  →  QUEUED. No free connections.
```

The hero image has high fetch priority — the browser knows it's critical. But it cannot start downloading because every connection is occupied. It waits.

**Lighthouse confirms the queue delay:**

| LCP Subpart           | Duration     |
|-----------------------|--------------|
| Time to first byte    | 300ms        |
| Resource load delay   | **1,870ms**  |
| Resource load duration| 1,900ms      |
| Element render delay  | 40ms         |
| **Total LCP**         | **~5.20s**   |

The 1,870ms resource load delay is the hero image sitting in queue waiting for a free connection. That is the entire problem.

## How HTTP/2 Fixes It

HTTP/2 multiplexes all requests over a **single connection**. There is no queue.

```
One multiplexed connection carries everything simultaneously:
  ├── HTML
  ├── CSS file 1
  ├── CSS file 2
  ├── CSS file 3
  ├── Hero image     ← starts immediately at high priority
  └── JS chunks
```

Expected outcome after enabling HTTP/2:

| Metric                  | Before   | After HTTP/2 |
|-------------------------|----------|--------------|
| LCP resource load delay | 1,870ms  | ~50ms        |
| LCP total               | ~5.20s   | ~1.5–2s      |
| Lighthouse score        | 81       | 90+          |

---

## Fix

### Step 1 — SSH into your server

```bash
ssh your-user@your-server-ip
```

### Step 2 — Find the nginx config file

```bash
sudo nginx -T | grep -n "listen 443"
```

This prints the file path and line number of every SSL listen directive.

### Step 3 — Edit the config

```bash
sudo nano /etc/nginx/sites-available/pgagi.in
```

Find the `server` block handling HTTPS and update the `listen` directives:

```nginx
# Before
server {
    listen 443 ssl;
    listen [::]:443 ssl;
}

# After
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
}
```

### Step 4 — Test and reload

```bash
sudo nginx -t
```

If output shows `syntax is ok` and `test is successful`:

```bash
sudo systemctl reload nginx
```

### Step 5 — Verify

```bash
curl -sI --http2 https://pgagi.in | head -2
```

Expected:
```
HTTP/2 200
```

---

## Optional — Enable Gzip Compression

While in the nginx config, add compression. This reduces CSS/JS transfer sizes by ~70%, cutting the time those files occupy connections.

Add inside the `http {}` block (usually in `/etc/nginx/nginx.conf`):

```nginx
gzip on;
gzip_vary on;
gzip_comp_level 6;
gzip_types text/css application/javascript application/json image/svg+xml font/woff2;
```

Then reload:

```bash
sudo systemctl reload nginx
```

---

## Verification Checklist

- [ ] `curl -sI --http2 https://pgagi.in | head -2` returns `HTTP/2 200`
- [ ] Lighthouse LCP drops below 2.5s
- [ ] Resource load delay drops below 100ms in LCP breakdown
- [ ] Hero image starts loading within 200ms of navigation start
