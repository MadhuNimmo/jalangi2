const puppeteer = require('puppeteer');
var express = require('express');
var app = express();
const path_to_basic_app = process.argv[2];
const port = process.argv[3]
app.use(express.static(path_to_basic_app));
// app.use(express.static(main));
app.get('/', function(req, res) {
    res.sendFile('index.html');
});
var server = app.listen(port);

(async () => {
    if (!process.env.BASEURL) {
        console.log('Please specify a base url. E.g. `BASEURL=http://example.org node exercise.js`');
    } else {
      var browser;
      
      if (process.env.DEBUG) {
        browser = await puppeteer.launch({
            headless: false, 
            // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        });
      } else {
        browser = await puppeteer.launch();
      }
  
      const page = await browser.newPage()
      page.setDefaultNavigationTimeout(120000) //2 mins
  
      const pageOptions = {waitUntil: 'domcontentloaded'}
      const selectorOptions = {"timeout": 120000} //2 mins
  
      try {
        //Add error handling here in case the endpoint is not ready.
        console.log(process.env.BASEURL + 'index.html')
        await page.goto(process.env.BASEURL + 'index.html', pageOptions);
      } catch (error) {
        console.log(error);
        browser.close();
      }

      await page.waitFor(10000)

      await page.goto(process.env.BASEURL  + '/index.html#secondpage', pageOptions)
      
      await page.waitFor(10000)
  
      browser.close()
      server.close()
    }
  })()
  