//const browser = await puppeteer.launch({headless: false});
const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const port = 8888;    

      
(async () => {
        //const browser = await puppeteer.launch({headless: false});
        //const page = await browser.newPage();
        //await page.goto('file:///tmp/html/index.html');
        /*app.get('/', async (request, response) => {
                await rest ()
                response.set({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Content-Type': 'text/plain'
                })
        
                response.send(content)
            })
        
            app.listen(port, () => {
                console.log(`server listening on port ${port}!`)
            })*/
            const browser = await puppeteer.launch({
                headless: false,
                args: [
                  "--no-sandbox",
                  "--disable-dev-shm-usage",
                ],
              });
	try {
		const page = await browser.newPage();
		const response = await page.goto('file:///home/anon/jalangi2/experiments/html/html2/index.html', {
			timeout: 25000,
			waitUntil: 'networkidle2'
                });
        }
                
                catch (e) {
                        const html = e.toString();
                        console.warn({ message: `URL: ${url} Failed with message: ${html}` })
                        return { html, status: 500 }
                }
        //await page.goto('file:///tmp/react/index.html')
        //await page.keyboard.press('Enter');
        //await page.waitFor(2000);
        /*await page.evaluate( async (btn) => {
                document.getElementById("knockout_data_bind_1").click();
                //page.waitFor(1000);
                // page.keyboard.press('Enter');

                //return;
                //await page.keyboard.press('Enter');
                //await page.waitFor("#BoxAlertBtnOk");
        //await page.click("#BoxAlertBtnOk")
                //document.getElementById("test").click();
                //page.press('Enter');
                //console.log(jsonCallList)
                //console.log("here")
        });*/
        //await page.waitFor('alert');
        //await page.waitForNavigation(); 
        //await page.keyboard.press('Enter');

        //await page.waitForNavigation();
        //await dialog.dismiss()
        //await page.goto('https://chercher.tech/practice/popups');
        //await page.goto('file:///tmp/knockout_rev/index.html')
        
            //await page.click("input[name='alert']")
        /*page.on('dialog', async dialog => {
                console.log(dialog.message());
                await dialog.dismiss();
                await browser.close();
              });
              page.evaluate(() => alert('1'));*/

        //await page.evaluate(`window.confirm = () => true`)
        /*page.on('alert', async dialog => {
                console.log("Dialog is up...");
        delay(1000);
    console.log("Accepted...");
    dialog.accept();
        delay(1000);
                //await page.keyboard.press(String.fromCharCode(13)); 
              });*/
               
              //await page.evaluate(() => alert('This message is inside an alert box'))
        /*page.on('dialog', async dialog => {
                console.log(dialog.accept());
        });*/
        //await page.goto('file:///tmp/knockout_rev/index.html/popups');
        //await page.click("input[name='ok']")
        /*page.on('dialog', async dialog => {
                console.log(dialog.message());
                await dialog.dismiss();
                await browser.close();
              });*/
        /*page.on('console', msg => 
        {console.log(msg.text());
        });*/
       /* page.on('dialog', async dialog => {
                console.log(dialog.accept());
        });*/
        //await page.waitFor("#BoxAlertBtnOk");
        //await page.click("#BoxAlertBtnOk");
        //await page.waitFor("#BoxAlertBtnOk");
        //await page.click("#BoxAlertBtnOk");
        /*const rest = async ()=> {
                await page.goto('file:///tmp/react/index.html')
                page.on('console', async msg => {
        const args = await msg.args()
        args.forEach(async (arg) => {
                const val = await arg.jsonValue()
                // value is serializable
                //console.log(typeof val)
                if (typeof val=="object" && JSON.stringify(val) !== JSON.stringify({})) {
                        console.log(val)}
                        //console.log("here")}
                // value is unserializable (or an empty oject)
                else {
                const { type, subtype, description } = arg._remoteObject
                //console.log(`type: ${type}, subtype: ${subtype}, description:\n ${description}`)
                }
        })
        });
}*/
                      
//}


                //}*/
        //await page.keyboard.press('Enter');
        /*await page.keyboard.down('Shift');
        await page.keyboard.down('Alt');
        await page.keyboard.press('KeyT');
        await page.keyboard.up('Shift'); */
        //await browser.close();
        //console.log(cnt)
      })();