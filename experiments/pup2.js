//const browser = await puppeteer.launch({headless: false});
const puppeteer = require('puppeteer');

      
(async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        page.on('console', msg => 
        {console.log(msg.text());
        });
        await page.goto('file:///tmp/html2/index.html');
        await page.evaluate( async (btn) => {
                document.getElementById("test").click();
        });
        
        /*page.on('console', async msg => {
        const args = await msg.args()
        args.forEach(async (arg) => {
                const val = await arg.jsonValue()
                if (typeof val=="object" && JSON.stringify(val) !== JSON.stringify({})) {
                        console.log(val)}
        })
        });*/
        await page.keyboard.down('Shift');
        await page.keyboard.down('Alt');
        await page.keyboard.press('KeyT');
        await page.keyboard.up('Shift'); 
        await browser.close();
      })();