const puppeteer = require('puppeteer');
const fs = require('fs');
const process = require('process');
var jalangi = require('/home/anon/jalangi2/src/js/utils/api');
var inputDir =[]
inputDir.push(process.argv[2])
var options = {
        instrumentInline: true,
        inlineIID: true,
        inlineSource: true,
        inlineJalangi: true,
        analysis: ['src/js/sample_analyses/ChainedAnalyses.js', 'src/js/sample_analyses/dlint/Utils.js', 'experiments/metrics/DynNative.js'],
        outputDir: '/tmp',
        inputFiles: inputDir
};
(async () => {
  if (process.argv.length < 5) {
    console.log("Please provide arguments in the following sequence : 1:Input directory 2:web app 3:Output path")
    return;
  }
  inpath = process.argv[3]
  outpath = process.argv[4]
  await new Promise((resolve, reject) => {
    try {
      resolve(jalangi.instrumentDir(options));
    } catch (err) {
      reject(err.toString());
    }
  });
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var xssCalls = {};
  var xssSinks = {};
  await page.goto(inpath)
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
  data = (await page.evaluate('J$.callList'));
  //[xssCalls,xssSinks] = (await page.evaluate('J$.outList'));
  /*fs.writeFile(outpath+"/tempCalls.json", JSON.stringify(xssCalls), function (err) {
    if (err) throw err;
    console.log('complete');
  });
  fs.writeFile(outpath+"/tempSinks.txt", JSON.stringify(xssSinks), function (err) {
    if (err) throw err;
    console.log('complete');
  });*/
  console.log(data)
  await browser.close();
})();

//node experiments/WebappEval.js file/to/read/ output/path