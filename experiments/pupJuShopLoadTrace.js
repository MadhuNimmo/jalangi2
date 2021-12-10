const puppeteer = require("puppeteer");
const fs = require("fs");
const {performance} = require('perf_hooks');
//var jalangi = require("/home/anon/jalangi2/src/js/utils/api.js");
const waitForAnySelector = require("/home/anon/jalangi2/experiments/helpers.js");
var inputDir = [];
var data = "";
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
      "--shm-size=3gb",
      "--single-process",
    ],
  });

  //Starts here
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0); 
  page.setDefaultTimeout(0);
  await Promise.all([page.coverage.startJSCoverage()]);
  await page.waitFor(3000);
  var t0 = performance.now()

  await Promise.race([
    page.goto("http://192.168.1.223:3000/index.html", { waitUntil: ["load", "networkidle2"] , timeout: 0}),
    page.waitFor("body"),
  ]);

var t1 = performance.now()
console.log("It took " + (t1 - t0) + " milliseconds.")
await page.waitFor(2000);
await page.waitForSelector('.mat-app-background > #jalangi_results_show_button > button')
await page.click('.mat-app-background > #jalangi_results_show_button > button')
const jsCoverage = await Promise.all([page.coverage.stopJSCoverage()]);
const js_coverage = [...jsCoverage];
//Parse collected JS Coverage
let cov = {};
cnt = 0;
for (const entry of js_coverage[0]) {
  if (!(entry.url in cov)) {
    cov[entry.url] = {
      js_total_bytes: 0,
      js_used_bytes: 0,
    };
  }
  cov[entry.url]["js_total_bytes"] =
    cov[entry.url]["js_total_bytes"] + entry.text.length;

  for (const range of entry.ranges) {
    cov[entry.url]["js_used_bytes"] =
      cov[entry.url]["js_used_bytes"] + range.end - range.start;
  }
}
for (entry in cov) {
  console.log(
    `Utilization percetages ${entry}: ${
      (cov[entry]["js_used_bytes"] / cov[entry]["js_total_bytes"]) * 100
    }%`
  );
}
/*Object.size = function(obj) {
      var size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
};
var size = Object.size(data);
console.log("Size : " + size);*/
var getData = async () => {  
      return await page.evaluate(async () => {
        return await new Promise((resolve) => {
          try {
            data = J$.callList;
            resolve(data);
          } catch (error) {
            reject(error);
          }
        }).catch((error) => {
          console.error(error);
        });
      });
};
    data = await getData().catch((error) =>
      console.log(`Error reading output: ${error}.`)
    );
    await browser.close();
      /*var out = "[";
      for (var indx = 0; indx < data.length - 1; indx++) {
      out += JSON.stringify(data[indx], null, 1) + ",";
      }
      out += JSON.stringify(data[data.length - 1], null, 1) + "]";
      fs.writeFileSync(outpath, out, function (err) {
      if (err) throw err;
      console.log("complete");
      });*/
  fs.writeFile(outpath, JSON.stringify(data, null, "    "), function (err) {
  if (err) throw err;
  console.log("complete");
  });
})();