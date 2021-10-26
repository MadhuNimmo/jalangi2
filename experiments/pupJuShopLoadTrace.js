const puppeteer = require("puppeteer");
const fs = require("fs");
const {performance} = require('perf_hooks');
//var jalangi = require("/Users/madhurimachakraborty/Documents/jalangi2/src/js/utils/api.js");
const waitForAnySelector = require("/Users/madhurimachakraborty/Documents/jalangi2/experiments/helpers.js");
var inputDir = [];
var data = 0;
//var iidToLocMap = {};
inputDir.push(process.argv[2]);
/*var options = {
  instrumentInline: true,
  inlineIID: true,
  inlineSource: true,
  inlineJalangi: true,
  analysis: [
    "src/js/sample_analyses/ChainedAnalyses.js",
    "src/js/sample_analyses/dlint/Utils.js",
    "experiments/metrics/DynNative.js",
  ],
  outputDir: "/tmp",
  inputFiles: inputDir,
};*/
module.exports = (async () => {
  var outpath = process.argv[3];
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--single-process",
    ],
  });
  //final remove
  /*"--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--single-process",
  */
  /* last args: [
      "--no-sandbox",
      "--shm-size=8gb"
    ],*/
  // last change remove "--disable-gpu","--disable-dev-shm-usage", and add "--shm-size=8gb"
//"--disable-setuid-sandbox",
//"--single-process",
//"--shm-size=8gb",
  //Starts here
  const page = await browser.newPage()
  
  await Promise.all([page.coverage.startJSCoverage()]);
  await page.waitFor(3000);
  var t0 = performance.now()
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/Users/madhurimachakraborty/Documents/JuiceShop_results/ResultsNewAll/'});
  await Promise.race([
    page.goto("http://192.168.1.223:3000/index.html", { waitUntil: ["load", "networkidle2"] , timeout: 0}),//waitUntil: ["load", "networkidle2"]
    page.waitFor("body"),
  ]);
        //console.log("It took " + ((t2 - t0)/60000) + " minutes to write the data.")
})();
//node experiments/pupServ.js ToDoMVC-framework-folder output-json-file