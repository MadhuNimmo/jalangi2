const puppeteer = require('puppeteer');
const fs = require("fs");
var jalangi = require("../src/js/utils/api");
const waitForAnySelector = require("./helpers.js");
var express = require("express");
var app = express();
var path = require("path");
var root = "/tmp";
var inputDir = [];
inputDir.push(process.argv[2]);
var options = {
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
};
(async () => {
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
  const page = await browser.newPage();

  await Promise.all([page.coverage.startJSCoverage()]);
  
  await Promise.race([
        page.goto("http://192.168.1.220:3000/", { waitUntil: ["load", "networkidle2"] }),
        page.waitForSelector("body"),
  ]);

  await page.waitFor(5000);

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
  const data = await page.evaluate("J$.callList");
  fs.writeFile(outpath, JSON.stringify(data, null, "    "), function (err) {
    if (err) throw err;
    console.log("complete");
  });
  await browser.close();
})();
