const puppeteer = require('puppeteer');
const fs = require('fs');
const waitForAnySelector =  require('./helpers.js');
var checkboxes;

(async (inp) => {
        
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await Promise.all([
                page.coverage.startJSCoverage()
              ]);
        await page.goto(process.argv[2], { waitUntil: 'domcontentloaded' });
        const selector = await waitForAnySelector(page, [
                '#new-todo', 
                '.new-todo'
              ])
        for (var i = 0; i < 10; i++) {
                await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
        }
            const toggleAll = await waitForAnySelector(page, [
                "label[for='toggle-all']", 
                "label[for='toggle-all']"
              ])
              await page.click(toggleAll);
                await page.$$eval('input[class="toggle"]', checks => {
                        for (var i = 0; i < checks.length; i += 2)
                                checks[i].click();
                })
                await page.$$eval('button[class="destroy"]', destroys => {
                        for (var i = 0; i < destroys.length; i += 4)
                        destroys[i].click();
                })
                //await page.waitFor(1000)

                await page.waitForSelector('a[href="#/completed"]');
                await page.click('a[href="#/completed"]');
                await page.waitForSelector('a[href="#/active"]');
                await page.click('a[href="#/active"]');
                const clearCompleted = await waitForAnySelector(page, [
                        '#clear-completed',
                        '.clear-completed'
                      ])
                
                await page.click(clearCompleted);
        //await page.waitFor(1000)
        const getAll = await waitForAnySelector(page, [
                'a[href="#/"]',
                'a[href="#!"]', 
                'a[href="#/all"]'
              ])
                await page.click(getAll);

        await page.keyboard.down('Shift');
        await page.keyboard.down('Alt');
        await page.keyboard.press('KeyT');
        await page.keyboard.up('Shift'); 
        const jsCoverage = await Promise.all([
                page.coverage.stopJSCoverage(),
              ]);
              const js_coverage = [...jsCoverage];
              //Parse collected JS Coverage
              let cov = {};
              cnt = 0
              for (const entry of js_coverage[0]) {
                if (!(entry.url in cov)) {
                  cov[entry.url] = {
                    'js_total_bytes': 0,
                    'js_used_bytes': 0
                  }
                }
                cov[entry.url]['js_total_bytes'] = cov[entry.url]['js_total_bytes'] + entry.text.length;
            
                for (const range of entry.ranges) {
                  cov[entry.url]['js_used_bytes'] = cov[entry.url]['js_used_bytes'] + range.end - range.start;
            
                }
            
              }
              for (entry in cov) {
                console.log(`Utilization percetages ${entry}: ${cov[entry]['js_used_bytes'] / cov[entry]['js_total_bytes'] * 100}%`);
              }
        /*const data= (await page.evaluate('J$.callList'));
        fs.writeFile('/home/anon/js-acg-examples-master/js-callgraph/todomvc/response.json', JSON.stringify(data), function(err) {
                if (err) throw err;
                console.log('complete');
            });*/
        await browser.close();
})();
//node experiments/todoPup.js