const puppeteer = require('puppeteer');
const browser = await puppeteer.launch({headless: true});
(async function fetchRemotePage(url) {
        const page = await browser.newPage();
        const resp = await page.goto(url, {waitUntil: 'domcontentloaded'});
        
        // If author is creating a new page, it won't have an URL yet.
        // Instead, use a generic page (index.html) for rendering the content.
        if (resp.status() === 404) {
          return fetchRemotePage('https://web.dev/');
        }
        
        return page;
        })();