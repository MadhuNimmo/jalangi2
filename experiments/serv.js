var express = require('express');
var app = express();
var path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs');
const waitForAnySelector =  require('./helpers.js');

var root = "/tmp/react"
app.use(express.static(root));
app.use(express.static("/home/anon/todomvc-master/"));
app.use(express.static("/home/anon/todomvc-master/site-assets/"))
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.resolve(root + '/index.html'));
});
var server =app.listen(8080);
(async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("http://localhost:8080",{ waitUntil: 'domcontentloaded' });
        const selector = await waitForAnySelector(page, [
                '#new-todo', 
                '.new-todo'
              ])
        for (var i = 0; i < 10; i++) {
                await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
        }
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
       
        fs.writeFile('/home/anon/misc/response.json', JSON.stringify(data), function(err) {
                if (err) throw err;
                console.log('complete');
            });
        await browser.close();
        server.close();
})();