const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
    //Collecting JS coverage
    await Promise.all([
        page.coverage.startJSCoverage()
    ]);

    //Visit desired page and continue iteractions,
    //Press Alt+Shift+T to stop
    await page.goto(process.argv[2]);
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
    //Stop collecting JS Coverage
    const jsCoverage = await Promise.all([
        page.coverage.stopJSCoverage(),
    ]);
    
    const js_coverage = [...jsCoverage];
    //Parse collected JS Coverage
    let cov={};
    cnt=0
    for (const entry of js_coverage[0]) {
      
        if(!(entry.url in cov)){
                cov[entry.url]={
                        'js_total_bytes':0,
                        'js_used_bytes':0
                }
        }
        cov[entry.url]['js_total_bytes'] = cov[entry.url]['js_total_bytes'] + entry.text.length;

        for (const range of entry.ranges){
            cov[entry.url]['js_used_bytes'] = cov[entry.url]['js_used_bytes'] + range.end - range.start;

        }  
   
    }
    for (entry in cov){
    console.log(`Utilization percetages ${entry}: ${cov[entry]['js_used_bytes'] / cov[entry]['js_total_bytes'] * 100}%`);
    }
    await browser.close();
})();