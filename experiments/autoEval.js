const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        //await page.setContent(html);
        await page.goto(process.argv[2]);
        //page.waitFor( 2000 ).then(console.log(window.React))
       // await page.evaluate(() => console.log(`url is ${window.React}`));
        await page.evaluate(async () => {
                await new Promise((resolve, reject) => {
                  try {
                    document.addEventListener("keydown", (function (evt) {
                      evt = evt || window.event;
                      if (evt.shiftKey && evt.altKey && evt.keyCode == 84) {
                                console.log(window.React)
                        resolve();
                      }
                    })
                    )
                  } catch (err) {
                    reject(err.toString());
                  }
                });
              });

        const data = (await page.evaluate('J$.callList'));
       
        fs.writeFile('/Users/madhurimachakraborty/Documents/misc/response.json', JSON.stringify(data), function(err) {
                if (err) throw err;
                console.log('complete');
            });
        await browser.close();
})();

//node experiments/autoEval.js