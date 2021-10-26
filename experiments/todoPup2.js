  const puppeteer = require('puppeteer');
  const fs = require('fs');
  const waitForAnySelector = require('./helpers.js');
  var express = require('express');
  const jsCov = require('./jsCoverage.js');
  var app = express();
  var path = require('path');
  var root = process.argv[2];
  console.log(root)
  var arr =((process.argv[2]).split(path.sep)).filter(el=> el!=="");
  var last = arr[arr.length-1] || arr[arr.length-2];
  //root=path.join(root,last)
  var isMain = (element,index) => arr[index].includes("todomvc") && arr[index+1]=="examples"
  var mainInd = arr.findIndex(isMain);
  var main = path.sep + path.join(...arr.slice(0,mainInd+1))+path.sep;
  var siteassets = path.sep+ path.join(main,"site-assets")+path.sep;
  //console.log(root,main,siteassets)
  app.use(express.static(root));
  app.use(express.static(main));
  app.use(express.static(siteassets));
  // viewed at http://localhost:8080
  app.get('/', function(req, res) {
  res.sendFile(root + '/index.html');
  });
  var server = app.listen(8080);
  (async () => {
  if (process.argv.length < 3) {
  console.log("Please provide argument the path to the local HTML file.")
  return;
  }
  inPath = process.argv[2]
  const browser = await puppeteer.launch({
  headless: false,
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout( 90000 )
  await Promise.all([
  jsCov.startJSCov(page.coverage)
  ]);

  await page.goto('http://localhost:8080', {"waitUntil":["load", "networkidle2"]});
  const selector = await waitForAnySelector(page, [
  '#new-todo',
  '.new-todo'
  ])
  if(root.endsWith("mithril/")){
  //Try typing a todo and then escape
  await page.type(selector, '0').then(async () => { await page.keyboard.press('Escape') }) 
  }
  await page.waitFor(1000);
  for (var i = 0; i < 5; i++) {
  await page.waitFor(500);
  if(i == 4){
    //try adding blank todo
    await page.type(selector, '    ').then(async () => { await page.keyboard.press('Enter') })
  }else{
    //await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
    await page.type(selector, i.toString()).then(async () => { await page.keyboard.press('Enter') })
  }
  await page.waitFor(500);
  }
  await page.waitFor(1000);
  const changeText = await waitForAnySelector(page, [
  ".view label",
  ".td-item"])
  if(root.endsWith("knockback/")){
  //await page.click(changeText,{ visible: true ,clickCount: 3 })
  const element = await page.$(changeText) // this is an ElementHandle
  await element.click({ visible: true , clickCount: 2 })
  await page.keyboard.press('Tab')
  await page.keyboard.press('ArrowRight')
  await page.type(changeText," changed")
  await page.keyboard.press('Enter')
  await page.waitFor(3000)
  await element.click({ visible: true ,clickCount: 2 })
  await page.keyboard.press('Tab')
  await page.keyboard.press('ArrowRight')
  await page.type(changeText," changed")
  await page.keyboard.press('Escape')
  await page.waitFor(3000)
  await element.click({ visible: true ,clickCount:2 })
  await page.keyboard.press('Tab')
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  for(var i=0; i<10;i++){
    await page.keyboard.down('Backspace');
  }
  await page.keyboard.press('Enter')
  await page.waitFor(3000)
  await page.click(changeText,{ visible: true ,clickCount: 2 })
  await page.keyboard.press('Tab')
  await page.keyboard.press('ArrowLeft')
  await page.type(changeText," ")
  await page.keyboard.press('Enter')

  }else{
  await page.click(changeText,{ visible: true ,clickCount: 2 })
  await page.type(changeText," changed")
  await page.keyboard.press('Enter')


  /////////Breaks Knockback/////////
  // do again but this time do not save the change
  await page.waitFor(3000)
  await page.click(changeText,{ visible: true ,clickCount: 2 })
  await page.type(changeText," changed")
  await page.keyboard.press('Escape')

  //Edit a todo and delete its text, then press enter, this removes the todo since it is now blank
  /////////Breaks backbone/////
  await page.waitFor(3000)
  await page.click(changeText,{ visible: true ,clickCount:2 })
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  for(var i=0; i<10;i++){
  await page.keyboard.down('Backspace');
  }
  await page.keyboard.press('Enter');
  /////////Breaks backbone/////
  //Try adding a whitespace
  await page.waitFor(3000)
  await page.click(changeText,{ visible: true ,clickCount: 2 })
  await page.type(changeText," ")
  await page.keyboard.press('Enter')
  }
  await page.waitFor(3000)
  /////////Breaks Knockback/////////
  if(root.endsWith("mithril/")){
  // toggle and untoggle using checkbox if possible {mithril}
  const checkBox = await waitForAnySelector(page, ["input.toggle[type=checkbox]"])
  try{
    if(checkBox != undefined && checkBox.length != 0){
      await page.click(checkBox)
      await page.click(checkBox)
    }
  }catch(e){
    console.error(e)
  }
  }

  const toggleAll = await waitForAnySelector(page, [
  "label[for='toggle-all']",
  "label[for='toggle-all']",
  "input[class='toggle-all']" 
  ])

  await page.click(toggleAll);
  await page.waitFor(1000)
  await page.$$eval('.toggle', checks => {
  // for (var i = 0; i < checks.length; i += 2)
    checks[1].click();
  })
  await page.waitFor(1000)
  await page.$$eval('.destroy', destroys => {
  // for (var i = 0; i < destroys.length; i += 4)
    destroys[2].click();
  })

  const aElementsCompleted = await page.$x("//a[contains(., 'Completed')]");
  if(aElementsCompleted != undefined && aElementsCompleted.length != 0){
  await aElementsCompleted[0].click();
  }else{
  console.log("fail")
  }

  const aElementsActive = await page.$x("//a[contains(., 'Active')]");
  if(aElementsActive != undefined && aElementsActive.length !== 0){
  await aElementsActive[0].click();
  }else{
  console.log("fail")
  }

  const clearCompleted = await waitForAnySelector(page, [
  '#clear-completed',
  '.clear-completed'
  ])
  if(clearCompleted != undefined && clearCompleted.length != 0){
  await page.click(clearCompleted);
  }else{
  console.log("fail")
  }

  const getAll = await waitForAnySelector(page, [
  'a[href="#/"]',
  'a[href="#!"]',
  'a[href="#/all"]',
  'a[class="selected"]'
  ])
  if(getAll != undefined && getAll.length != 0){
  await page.click(getAll);
  }else{
  console.log("fail")
  }

  await page.keyboard.down('Shift');
  await page.keyboard.down('Alt');
  await page.keyboard.press('KeyT');
  await page.keyboard.up('Shift');

  // await page.waitFor(100000)
  const jsCoverage = await jsCov.stopJSCov(page.coverage);
  await jsCov.parseJSCov(jsCoverage);
  await browser.close();
  server.close()
  })();
  /*
  Execution format:
  node scripts/todoPup.js /input/directory/
  Sample:
  node scripts/todoPup.js ../todomvcmaster/examples/vanillajs/index.html
  */