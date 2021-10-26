const puppeteer = require('puppeteer');
//const pti = require('puppeteer-to-istanbul');
//const assert = require('assert');
const fs = require('fs');

/**
 * ./test/script_test.js
 * @name Feature testing
 * @desc Create Chrome instance and interact with page.
 */

let browser;
let page;

(async() => {
        // Create browser instance
        browser = await puppeteer.launch({ headless: false })
        page = await browser.newPage()
        //await page.setViewport({ width: 1280, height: 800 });
        // Enable both JavaScript and CSS coverage
        await Promise.all([
            page.coverage.startJSCoverage(),
            page.coverage.startCSSCoverage()
          ]);
        // Endpoint to emulate feature-isolated environment
        await page.goto('file:///tmp/html/index.html', { waitUntil: 'networkidle2' });
    //});
    // Second Test-suit
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
          try {
            document.addEventListener("keydown", (function (evt) {
              evt = evt || window.event;
              if (evt.shiftKey && evt.altKey && evt.keyCode == 84) {
                resolve();
              }
            })
            )
          } catch (err) {
            reject(err.toString());
          }
        });
      });
    // Save coverage and close browser context
        // Disable both JavaScript and CSS coverage
        const jsCoverage = await page.coverage.stopJSCoverage();
        await page.coverage.stopCSSCoverage();

        let totalBytes = 0;
        let usedBytes = 0;
        const coverage = [...jsCoverage];
        for (const entry of coverage) {
            totalBytes += entry.text.length;
            console.log(`js fileName covered: ${entry.url}`);
            for (const range of entry.ranges)
                usedBytes += range.end - range.start - 1;
        }
        // log original byte-based coverage
        console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);
        //pti.write(jsCoverage);
        fs.writeFile("./jsCoverage.txt", coverage, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        // Close browser instance
        await browser.close();
    //});
})();