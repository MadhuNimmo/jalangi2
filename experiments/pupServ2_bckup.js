const puppeteer = require('puppeteer');
const fs = require('fs');
var jalangi = require('../src/js/utils/api');
const waitForAnySelector =  require('./helpers.js');
var express = require('express');
var app = express();
var path = require('path');
var root = "/tmp"
var inputDir =[]
inputDir.push(process.argv[2])
var options = {
        instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        inlineJalangi: true,
        analysis: ['src/js/sample_analyses/ChainedAnalyses.js', 'src/js/runtime/SMemory.js', 'experiments/flowTrace_smem.js'],
        outputDir: '/tmp',
        inputFiles: inputDir
};
//root += (process.argv[2]).split("/")[0]==""?(process.argv[2]).split("/")[0]:(process.argv[2]).split("/")[1]
var arr =((process.argv[2]).split(path.sep)).filter(el=> el!=="");
var last = arr[arr.length-1] || arr[arr.length-2];
root=path.join(root,last)
var isMain = (element,index) => arr[index].includes("todomvc") && arr[index+1]=="examples"
var mainInd = arr.findIndex(isMain);
var main = path.sep + path.join(...arr.slice(0,mainInd+1))+path.sep//arr.slice(0,mainInd+1).join("/")+"/"
var siteassets = path.sep+ path.join(main,"site-assets")+path.sep;
app.use(express.static(root));
app.use(express.static(main));
app.use(express.static(siteassets));
/*app.use(express.static("/Users/madhurimachakraborty/Documents/todomvc-master/"));
app.use(express.static("/Users/madhurimachakraborty/Documents/todomvc-master/site-assets/"))*/
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(root + '/index.html');
});
var server = app.listen(8080);
module.exports = (async () => {
    if (process.argv.length < 3) {
        console.log("Please provide arguments in the following sequence : 1:Input directory 2:Output file path")
        return;
      }
      //inpath = process.argv[3]
      var outpath = process.argv[3]
      await new Promise((resolve, reject) => {
        try {
          resolve(jalangi.instrumentDir(options));
        } catch (err) {
          console.log(err);
          reject(err.toString());
        }
      });
const browser = await puppeteer.launch({headless: false});
  /*args: [
    '--enable-features=NetworkService',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--shm-size=3gb', // this solves the issue
  ],

});*/
const page = await browser.newPage();
 await Promise.all([
    page.coverage.startJSCoverage()
    ]);
      await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeOut(3000)
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
        "label[for='toggle-all']", 
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
//const data = "";
/*await page.evaluate(async () => {
  new Promise((resolve, reject) => {
    try {
          data= J$.CallTrace;
          resolve();
    } catch (error) {
      reject(error);
    }
  }).catch(error => {
    console.error(error) // add catch here
  })
});*/
/*const getData = async() => {
  return await page.evaluate(async () => {
      return await new Promise(resolve => {
            try {
              data= J$.CallTrace;
              resolve(data);
            } catch (error) {
              reject(error);
            }
             }).catch(error => {
              console.error(error) 
    })
  })
}  
data = await getData();*/
/**/
//const data= (await page.evaluate('J$.CallTrace'));
//console.log(Object.keys(data).length)
/*var transformStream = JSONStream.stringify();
var outputStream = fs.createWriteStream(outpath);
transformStream.pipe(outputStream);    
data.forEach(transformStream.write);
transformStream.end();

outputStream.on(
    "finish",
    function handleFinish() {
        console.log("Done");
    }
);*/
/*var j = data;
var myObjectStringify = "[";
var last = j.length
var count = 0;
console.log(j.length)
for (x of j) {
    console.log(x)
    console.log(nimmo)
    //myObjectStringify += JSON.stringify(x);
    count++;
    if (count < last)
        myObjectStringify += ",";
}
myObjectStringify += "]";
//console.log(myObjectStringify[0])*/
  /*fs.writeFile(outpath, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });*/
  await browser.close();
  server.close()
  })();
//module.exports = {pupServ};
//node experiments/pupServ.js /Users/madhurimachakraborty/Documents/todomvc-master/examples/vanillajs /Users/madhurimachakraborty/Documents/todomvc-study/DCG.json