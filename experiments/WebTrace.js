const puppeteer = require('puppeteer');
const fs = require('fs');
const process = require('process');
var jalangi = require('/Users/madhurimachakraborty/Documents/jalangi2/src/js/utils/api');
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
(async () => {
  if (process.argv.length < 4) {
    console.log("Please provide arguments in the following sequence : 1:Input directory 2:web app 3:Output file path")
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
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  var data = "";
  await page.goto(inpath, {waitUntil: 'load'})
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
  data = (await page.evaluate('J$.CallTrace'));
  fs.writeFile(outpath, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });
  //await browser.close();
})();

//node experiments/WebappEval.js file/to/read/ output/path