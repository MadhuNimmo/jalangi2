const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
var jalangi = require('../node_modules/jalangi2/src/js/utils/api');
const waitForAnySelector =  require('./helpers.js');
var inputDir =[]
var inPath = outPath = "";
inputDir.push(process.argv[2])
var options = {
        instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        inlineJalangi: true,
        analysis: ['node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js', 'node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js', 'src/DynNative.js'],
        outputDir: '/tmp',
        inputFiles: inputDir
};
(async (inp) => {
        if (process.argv.length < 5) {
                console.log("Please provide arguments in the following sequence : 1:Input directory 2:web app 3:Output file path")
                return;
              }
              inPath = process.argv[3]
              outPath = process.argv[4]
              await new Promise((resolve, reject) => {
                try {
                  resolve(jalangi.instrumentDir(options));
                } catch (err) {
                  reject(err.toString());
                }
              });
        var xyz="--user-data-dir="+process.argv[3]
        var argsA = ['--disable-web-security', '--allow-file-access-from-files','--disable-features=OutOfBlinkCors']
          var args2=['--disable-infobars',
          '--disable-features=IsolateOrigins,site-per-process',
          '--allow-file-access-from-files'
        ]
        //const browser = await puppeteer.launch({headless: false ,ignoreHTTPSErrors: true,args: argsA});
        const browser = await puppeteer.launch({
          executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          ignoreDefaultArgs: true,
          args: [
            "--disable-web-security",
            "--user-data-dir",
            "--enable-usermedia-screen-capturing",
            "--allow-http-screen-capture",
            "--start-fullscreen",
            "--kiosk",
            "--disable-infobars"
          ],
          headless: false,
        });
        //const page = await browser.newPage();
        await Promise.all([
                page.coverage.startJSCoverage()
              ]);
              //await page.goto(inPath, { waitUntil: 'domcontentloaded' });
        const selector = await waitForAnySelector(page, [
                '#new-todo', 
                '.new-todo'
              ])
        for (var i = 0; i < 10; i++) {
                await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
        }

        await page.click('.view label',{ clickCount: 2 })
        await page.type('.view label'," changed") 
        await page.keyboard.press('Enter')
            const toggleAll = await waitForAnySelector(page, [
                "label[for='toggle-all']"
              ])
              await page.click(toggleAll);

                await page.$$eval('.toggle', checks => {

                        for (var i = 0; i < checks.length; i += 2)

                                checks[i].click();
                })
                await page.$$eval('.destroy', destroys => {
                        //console.log("destroy "+destroys.length)
                        for (var i = 0; i < destroys.length; i+=4)
                                destroys[i].click();
                })
                const aElementsCompleted = await page.$x("//a[contains(., 'Completed')]");
                await aElementsCompleted[0].click();
                const aElementsActive= await page.$x("//a[contains(., 'Active')]");
                await aElementsActive[0].click();
                const clearCompleted = await waitForAnySelector(page, [
                        '#clear-completed',
                        '.clear-completed'
                      ])
                
                await page.click(clearCompleted);
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
        const data= (await page.evaluate('J$.callList'));
        var finalPath=path.join(path.resolve(outPath),"response.json")
        fs.writeFile(finalPath, JSON.stringify(data), function (err) {
                if (err) throw err;
                console.log('The dynamic call graph has been saved in:'+finalPath);
              });
        await browser.close();
})();
/*
Execution format:
node scripts/todoAuto.js /input/directory/ file:///tmp/inputDir/htmlFile /output/directory/
Sample:
node scripts/todoAuto.js ../todomvc-master/examples/vanillajs/ file:///tmp/vanillajs/index.html ./todoOutputs/
*/
