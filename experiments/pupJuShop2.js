const puppeteer = require("puppeteer");
const fs = require("fs");
const {performance} = require('perf_hooks');
//var jalangi = require("/home/anon/jalangi2/src/js/utils/api.js");
const waitForAnySelector = require("/home/anon/jalangi2/experiments/helpers.js");
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
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/home/anon/JuiceShop_results/ResultsNewAll/'});
  await Promise.race([
    page.goto("http://192.168.1.223:3000/index.html", { waitUntil: ["load", "networkidle2"] , timeout: 0}),//waitUntil: ["load", "networkidle2"]
    page.waitFor("body"),
  ]);
  await page.setDefaultNavigationTimeout(0); 
  await page.setDefaultTimeout(0);
  
  await page.setViewport({ width: 1440, height: 706 })
  await page.waitFor(5000);
  //dont use this
  //await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/home/anon/JuiceShop_results/Results3/'});
  // dismiss info 
  await page.waitForSelector('#mat-dialog-0 > .ng-star-inserted > .mat-typography > div > .close-dialog')
  await page.click('#mat-dialog-0 > .ng-star-inserted > .mat-typography > div > .close-dialog')
  //await page.waitFor(5000)
  //close cookie consent 
  await page.waitForSelector('.mat-app-background > .cc-window > .cc-compliance > .cc-btn')
  await page.click('.mat-app-background > .cc-window > .cc-compliance > .cc-btn')
  //await page.waitFor(5000)
  //open navbar
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)') //from here to 358
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  //await page.waitFor(5000)
  // about us
  /*await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(9) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(9) > .mat-list-item-content')*/
  await page.waitFor(5000)
  // click arrow 
  /*await page.waitForSelector('.about-us > slideshow > .slideshow-container > .next > .arrow')
  await page.click('.about-us > slideshow > .slideshow-container > .next > .arrow')
  //await page.waitFor(5000)
  await page.waitForSelector('.about-us > slideshow > .slideshow-container > .next > .arrow')
  await page.click('.about-us > slideshow > .slideshow-container > .next > .arrow')*/
  //await page.waitFor(5000) //not playing
  // back to navbar
  await page.waitForSelector('.mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper > .mat-icon')
  await page.click('.mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper > .mat-icon')
  
  await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(10) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(10) > .mat-list-item-content')
  
  await page.waitForSelector('.mat-card > div > .grid > .container:nth-child(2) > .image')
  await page.click('.mat-card > div > .grid > .container:nth-child(2) > .image')
  
  await page.waitForSelector('.mat-card > div > .grid > .container:nth-child(3) > .image')
  await page.click('.mat-card > div > .grid > .container:nth-child(3) > .image')
  
  await page.waitForSelector('.mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper > .mat-icon')
  await page.click('.mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper > .mat-icon')
  // help
  await page.waitFor(5000)
  await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(12) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(12) > .mat-list-item-content')
  await page.waitFor(2000)
  await page.waitForSelector('.mat-drawer-container > .mat-drawer-content > div > #cancelButton > div')
  await page.click('.mat-drawer-container > .mat-drawer-content > div > #cancelButton > div')
  // front page and click on item and view review followed by search orange and click and see review
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(2)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(2)')
  await page.waitFor(2000)
  await page.waitForSelector('.mat-grid-tile:nth-child(1) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.click('.mat-grid-tile:nth-child(1) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.waitFor(2000)
  await page.waitForSelector('.mat-dialog-content > .container > .mat-expansion-panel > #mat-expansion-panel-header-0 > .mat-expansion-indicator')
  await page.click('.mat-dialog-content > .container > .mat-expansion-panel > #mat-expansion-panel-header-0 > .mat-expansion-indicator')
  await page.waitFor(2000)
  await page.waitForSelector('div > .mat-dialog-actions > .close-dialog > .mat-button-wrapper > span')
  await page.click('div > .mat-dialog-actions > .close-dialog > .mat-button-wrapper > span')
  await page.waitFor(2000)
  await page.waitForSelector('.mat-toolbar > .mat-toolbar-row > #searchQuery > .mat-search_icons > .mat-search_icon-search')
  await page.click('.mat-toolbar > .mat-toolbar-row > #searchQuery > .mat-search_icons > .mat-search_icon-search')
  
  /*const searchSpace = await waitForAnySelector(page,['#mat-input-0']) //from here to 358
  await page.type(searchSpace,"orange").then(async () => {
        await page.keyboard.press("Enter");
  });
  await page.waitFor(2000)
  await page.waitForSelector('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.click('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.waitFor(2000)
  await page.waitForSelector('.mat-content > .ng-tns-c156-23') //mat-content > .ng-tns-c156-24
  await page.click('.mat-content > .ng-tns-c156-23')
  await page.waitFor(2000)
  await page.waitForSelector('div > .mat-dialog-actions > .close-dialog > .mat-button-wrapper > span')
  await page.click('div > .mat-dialog-actions > .close-dialog > .mat-button-wrapper > span')
  await page.waitFor(5000)*/
  
  //account register
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(2)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(2)')
  await page.waitFor(5000)

  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  await page.waitFor(2000)
  
  await page.waitForSelector('#navbarLoginButton')
  await page.click('#navbarLoginButton')
  await page.waitFor(2000)
  //register a new account
  await page.waitForSelector('div > .mat-card > #login-form > #newCustomerLink > .primary-link')
  await page.click('div > .mat-card > #login-form > #newCustomerLink > .primary-link')
  
  await page.waitForSelector('#registration-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  
  const emailControl = await waitForAnySelector(page,['#emailControl'])
  await page.type(emailControl,"Xyz1234@gmail.com").then(async () => {
        await page.keyboard.press("Enter");
  });
  
  const pwdControl = await waitForAnySelector(page,['#passwordControl'])
  await page.type(pwdControl,"Xyz@1234").then(async () => {
        await page.keyboard.press("Enter");
  });
  
  const rpwdSpace = await waitForAnySelector(page,['#repeatPasswordControl'])
  await page.type(rpwdSpace,"Xyz@1234").then(async () => {
        await page.keyboard.press("Enter");
  });
  await page.waitFor(2000)
  await page.waitForSelector('.mat-card > #registration-form > #mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar')
  await page.click('.mat-card > #registration-form > #mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar')
  await page.waitFor(2000)
  await page.waitForSelector('mat-select[name="securityQuestion"]');
  await page.click('mat-select[name="securityQuestion"]')
  await page.waitFor(1000)
  const valOpt =await waitForAnySelector(page,['mat-option#mat-option-6']);
  await page.click(valOpt)
  await page.waitFor(1000)
  
  const secAnswer = await waitForAnySelector(page,['#securityAnswerControl'])
  await page.type(secAnswer,"xyz")

  await page.waitFor(2000)

  await page.waitForSelector('#registerButton')
  await page.click('#registerButton')
  //await page.waitForNavigation({ waitUntil: 'networkidle0' })
  //login with new account place an order
  await page.waitForSelector('#email')
  await page.type('#email',"Xyz1234@gmail.com")
  
  await page.waitForSelector('#password')
  await page.type('#password',"Xyz@1234")

  await page.waitForSelector('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .svg-inline--fa > path')
  await page.click('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .svg-inline--fa > path')
  await page.waitFor(1000)
  await page.waitForSelector('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .svg-inline--fa > path')
  await page.click('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .svg-inline--fa > path')

  await page.waitForSelector('.mat-card > #login-form > #rememberMe > .mat-checkbox-layout > .mat-checkbox-inner-container')
  await page.click('.mat-card > #login-form > #rememberMe > .mat-checkbox-layout > .mat-checkbox-inner-container')

  await page.waitForSelector('#loginButton')
  await page.click('#loginButton')

  //Add item to basket and see thru pages and the item descriptions
  await page.waitForSelector('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > div > .mat-focus-indicator')
  await page.click('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > div > .mat-focus-indicator')
  await page.click('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > div > .mat-focus-indicator')
  
  
  await page.waitForSelector('.mat-grid-tile:nth-child(3) > .mat-figure > .mat-card > div > .mat-focus-indicator')
  await page.click('.mat-grid-tile:nth-child(3) > .mat-figure > .mat-card > div > .mat-focus-indicator')
  //across pages
  await page.waitForSelector('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon')
  await page.click('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon')
  
  await page.waitForSelector('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon')
  await page.click('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon')
  //see desc and like review and write one
  await page.waitForSelector('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.click('.mat-grid-tile:nth-child(2) > .mat-figure > .mat-card > .mat-tooltip-trigger > .img-container > .mat-card-image')
  await page.waitFor(4000)
 
  await page.waitForSelector('#mat-expansion-panel-header-1') //changed 2 to 1
  await page.click('#mat-expansion-panel-header-1')
  await page.waitForSelector('div > div > .mat-focus-indicator > .mat-button-wrapper > .fa-2x')
  await page.click('div > div > .mat-focus-indicator > .mat-button-wrapper > .fa-2x')
  await page.waitFor(2000)
  
  await page.waitForSelector('div:nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('div:nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('div:nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"great one")
  /*await page.waitForSelector('#mat-input-10')
  await page.click('#mat-input-10')
  await page.type('#mat-input-10',"great one")*/
  

  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  await page.waitForSelector('.mat-dialog-content > .container > div > .mat-dialog-actions > .close-dialog')
  await page.click('.mat-dialog-content > .container > div > .mat-dialog-actions > .close-dialog')
  // add and remove from basket 
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(7)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(7)')
  
  await page.waitForSelector('app-purchase-basket > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(3) > .mat-focus-indicator:nth-child(1)')
  await page.click('app-purchase-basket > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(3) > .mat-focus-indicator:nth-child(1)')
  
  await page.waitForSelector('app-purchase-basket > .mat-table > .mat-row:nth-child(3) > .mat-cell:nth-child(5) > .mat-focus-indicator')
  await page.click('app-purchase-basket > .mat-table > .mat-row:nth-child(3) > .mat-cell:nth-child(5) > .mat-focus-indicator')
  //checkout basket
  await page.waitForSelector('#checkoutButton')
  await page.click('#checkoutButton')
  
  await page.waitForSelector('#card > app-address > .mat-card > .ng-star-inserted > .mat-focus-indicator')
  await page.click('#card > app-address > .mat-card > .ng-star-inserted > .mat-focus-indicator')
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"some country")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"someone")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"1234567890")

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"12345678")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somewhere")
  await page.waitFor(5000)
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somecity")

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somestate")
  await page.waitFor(2000)
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  // select address
  await page.waitFor(2000)
  await page.waitForSelector('app-address > .mat-card > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(1)')
  await page.click('app-address > .mat-card > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(1)')

  await page.waitForSelector('.ng-star-inserted > #card > app-address > .mat-card > .mat-focus-indicator')
  await page.click('.ng-star-inserted > #card > app-address > .mat-card > .mat-focus-indicator')
  
  // select delivery option
  await page.waitForSelector('.mat-card > div > .mat-table > .mat-row:nth-child(3) > .mat-cell:nth-child(1)')
  await page.click('.mat-card > div > .mat-table > .mat-row:nth-child(3) > .mat-cell:nth-child(1)')
  
  await page.waitForSelector('.mat-card > div > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(1)')
  await page.click('.mat-card > div > .mat-table > .mat-row:nth-child(2) > .mat-cell:nth-child(1)')
  
  await page.waitForSelector('.mat-drawer-content > .ng-star-inserted > .mat-card > div > .mat-focus-indicator:nth-child(2)')
  await page.click('.mat-drawer-content > .ng-star-inserted > .mat-card > div > .mat-focus-indicator:nth-child(2)')

  //select payment method
  const [newCard] = await page.$x("//mat-panel-title[contains(., ' Add new card ')]");
  if (newCard) {
    await newCard.click();
  }
  await page.waitFor(3000)
  await page.waitForSelector('input#mat-input-18') //changes to 18
  await page.click('input#mat-input-18')
  await page.type('input#mat-input-18','someone')

  await page.waitForSelector('#mat-input-19')
  await page.click('#mat-input-19')
  await page.type('#mat-input-19',"1234123412341234")
  
  await page.waitForSelector('#mat-input-20')
  await page.type('#mat-input-20',"10")

  await page.waitForSelector('#mat-input-21')
  await page.type('#mat-input-21  ',"2081")

  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  await page.waitFor(3000)

  //add coupon
  const [newCoupon] = await page.$x("//mat-panel-title[contains(., ' Add a coupon ')]");
  if (newCoupon) {
    await newCoupon.click();
  }
  
  await page.waitForSelector('#coupon')
  await page.click('#coupon')
  await page.type('#coupon',"k#*Agf!Cdm")

  await page.waitForSelector('#applyCouponButton')
  await page.click('#applyCouponButton')

 //checkout
  await page.waitForSelector('#mat-radio-42')
  await page.click('#mat-radio-42')
  
  await page.waitForSelector('.ng-star-inserted > .mat-card > div > div > .mat-focus-indicator:nth-child(2)')
  await page.click('.ng-star-inserted > .mat-card > div > div > .mat-focus-indicator:nth-child(2)')
  
  await page.waitForSelector('#checkoutButton')
  await page.click('#checkoutButton')
  //change language 
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(8)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(8)')
  await page.waitFor(1000)
  await page.waitForSelector('#mat-radio-9')
  await page.click('#mat-radio-9')

  await page.waitFor(5000)

  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(8)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(8)')
  await page.waitFor(1000)
  await page.waitForSelector('#mat-radio-8')
  await page.click('#mat-radio-8')
  
  await page.waitFor(2000)
  //change profile name and image 
  /*await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')

  await page.waitFor(3000)
  
  await page.waitForSelector('button[aria-label="Go to user profile"]')
  await page.click('button[aria-label="Go to user profile"]')

  await page.waitForSelector('#url')
  await page.type('#url','https://media.giphy.com/media/l3vQZT84QqVUKUWE8/giphy.gif')
  
  await page.waitForSelector('#submitUrl')
  await page.click('#submitUrl')

  await page.waitForSelector('#username')
  await page.type('#username','Xyz')

  await page.waitForSelector('#submit')
  await page.click('#submit')

  await page.waitForSelector('body > div > div > header > div > a:nth-child(1)')
  await page.click('body > div > div > header > div > a:nth-child(1)')*/
  
  //orders and payment menu 
  await page.waitForSelector('#navbarAccount') //from here to 583
  await page.click('#navbarAccount')

  await page.waitForSelector('button[aria-label="Show Orders and Payment Menu"]')
  await page.click('button[aria-label="Show Orders and Payment Menu"]')

  await page.waitFor(3000)
  //await page.$x("//span[contains(., ' Order History ')]");
  await page.waitForSelector('button[aria-label="Go to order history page"]')
  await page.click('button[aria-label="Go to order history page"]')
  /*if (ordrHist) {
    await ordrHist.click();
  }*/

  await page.waitForSelector('button[aria-label="Track Your Order"]');
  await page.click('button[aria-label="Track Your Order"]');

  //recycle option
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Orders and Payment Menu"]')
  await page.click('button[aria-label="Show Orders and Payment Menu"]')
  //recycle
  await page.waitFor(2000)
  const [ordrHist2] = await page.$x("//span[contains(., ' Recycle ')]");
  if (ordrHist2) {
    await ordrHist2.click();
  }
  
  const inputElement = await page.$('input[type=number]');
  await inputElement.type("10");
  //['#mat-input-2','mat-radio-25'])
  
  const inputElement2 = await page.waitForSelector('.mat-radio-button');
  await inputElement2.click();
  //await page.click(savedAdd)

  await page.waitForSelector('#recycleButton')
  await page.click('#recycleButton')
  //saved addresses option
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')

  await page.waitForSelector('button[aria-label="Show Orders and Payment Menu"]')
  await page.click('button[aria-label="Show Orders and Payment Menu"]')

  await page.waitFor(2000)
  const [ordrHist3] = await page.$x("//span[contains(., ' My saved addresses ')]");
  if (ordrHist3) {
  await ordrHist3.click();
  }

  await page.waitForSelector('.main-wrapper > app-address > .mat-card > .ng-star-inserted > .mat-focus-indicator')
  await page.click('.main-wrapper > app-address > .mat-card > .ng-star-inserted > .mat-focus-indicator')

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(1) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"some country")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"someone")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(3) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"1234567890")

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(4) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"12345678")
  
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(5) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somewhere")
  await page.waitFor(5000)
  await page.waitForSelector('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(6) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somecity")

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.type('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',"somestate")
  await page.waitFor(2000)
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  await page.waitFor(5000)
  // edit address
  await page.waitForSelector('.mat-card > .mat-table > .mat-row > .mat-cell:nth-child(4) > .mat-focus-indicator')
  await page.click('.mat-card > .mat-table > .mat-row > .mat-cell:nth-child(4) > .mat-focus-indicator')

  await page.waitForSelector('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.click('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  await page.$eval('#address-form > .mat-form-field:nth-child(7) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', el => el.value = 'somenewstate');

  await page.waitFor(2000)
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  await page.waitFor(5000)
  //delete address
  await page.waitForSelector('.mat-card > .mat-table > .mat-row > .mat-cell:nth-child(5) > .mat-focus-indicator')
  await page.click('.mat-card > .mat-table > .mat-row > .mat-cell:nth-child(5) > .mat-focus-indicator')

  // payment options add one, edit it and delete
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Orders and Payment Menu"]')
  await page.click('button[aria-label="Show Orders and Payment Menu"]')

  await page.waitFor(2000)
  const [ordrHist4] = await page.$x("//span[contains(., ' My Payment Options ')]");
  if (ordrHist4) {
  await ordrHist4.click();
  }

  const [newCard2] = await page.$x("//mat-panel-title[contains(., ' Add new card ')]");
  if (newCard2) {
    await newCard2.click();
  }
  await page.waitFor(3000)
  //await page.waitForSelector('input#mat-input-17')
  await page.waitForSelector('#mat-input-39') //changed 40 to 39
  await page.click('#mat-input-39')
  await page.type('#mat-input-39','someoneelse')

  //await page.waitForSelector('#mat-input-18')
  await page.waitForSelector('#mat-input-40')
  await page.click('#mat-input-40')
  await page.type('#mat-input-40',"1234123412341235")
  
  //await page.waitForSelector('#mat-input-19')
  await page.waitForSelector('#mat-input-41')
  await page.type('#mat-input-41',"10")

  //await page.waitForSelector('#mat-input-20')
  await page.waitForSelector('#mat-input-42')
  await page.type('#mat-input-42',"2081")

  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')

  await page.waitForSelector('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-saved-payment-methods > mat-card > app-payment-method > div > div.ng-star-inserted > mat-table > mat-row:nth-child(3) > mat-cell.mat-cell.cdk-cell.cdk-column-Remove.mat-column-Remove.ng-star-inserted > button')
  await page.click('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-saved-payment-methods > mat-card > app-payment-method > div > div.ng-star-inserted > mat-table > mat-row:nth-child(3) > mat-cell.mat-cell.cdk-cell.cdk-column-Remove.mat-column-Remove.ng-star-inserted > button')
  // digital wallet 
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Orders and Payment Menu"]')
  await page.click('button[aria-label="Show Orders and Payment Menu"]')
  
  await page.waitFor(2000)
  const [ordrHist5] = await page.$x("//span[contains(., ' Digital Wallet ')]");
  if (ordrHist5) {
    await ordrHist5.click();
  }
  
  //await page.waitForSelector('#mat-input-21')
  await page.waitForSelector('#mat-input-43') //changes 44 to 43
  await page.type('#mat-input-43',"40")
  
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  //await page.waitForSelector('#mat-radio-40')
  await page.waitForSelector('#mat-radio-45') //44 to 45
  await page.click('#mat-radio-45')
  
  await page.waitForSelector('button[aria-label="Proceed to review"]')
  await page.click('button[aria-label="Proceed to review"]')
  await page.waitFor(3000)
  // privacy policy
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(1000)
  await page.waitForSelector('button[aria-label="Go to privacy policy page"]') //new
  await page.click('button[aria-label="Go to privacy policy page"]')
  //await page.waitFor(2000)
  /*const [privSec1] = await page.$x("//span[contains(., 'Privacy Policy')]");
  if (privSec1) {
    await privSec1.click();
  }*/
  // request data export
  await page.waitFor(2000)
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(2000)
  const [privSec2] = await page.$x("//span[contains(., 'Request Data Export')]");
  if (privSec2) {
    await privSec2.click();
  }

  //await page.waitForSelector('#mat-radio-42')
  await page.waitForSelector('#mat-radio-48')
  await page.click('#mat-radio-48')
  //fix me with captcha
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  // request data erasure
  /*await page.waitFor(5000)
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')

  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(2000)
  const [privSec3] = await page.$x("//span[contains(., 'Request Data Erasure')]");
  if (privSec3) {
    await privSec3.click();
  }

  await page.waitForSelector('#email')
  await page.type('#email','Xyz1234@gmail.com')

  await page.waitForSelector('#securityAnswer')
  await page.type('#securityAnswer','xyz')

  await page.waitForSelector('.deleteButton')
  await page.click('.deleteButton')

  await page.waitFor(2000)

  await page.waitForSelector('.home-page')
  await page.click('.home-page')*/
  //change password 
  await page.waitFor(2000) //from here to 750
  
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(2000)
  const [privSec4] = await page.$x("//span[contains(., 'Change Password')]");
  if (privSec4) {
    await privSec4.click();
  }

  await page.waitForSelector('#currentPassword')
  await page.type('#currentPassword','Xyz@1234')

  await page.waitForSelector('#newPassword')
  await page.type('#newPassword','Xyz@12345')

  await page.waitForSelector('#newPasswordRepeat')
  await page.type('#newPasswordRepeat','Xyz@12345')

  await page.waitForSelector('#changeButton')
  await page.click('#changeButton')

  //2FA setup
  await page.waitFor(2000)
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(2000)
  const [privSec5] = await page.$x("//span[contains(., '2FA Configuration')]");
  if (privSec5) {
    await privSec5.click();
  }
  await page.waitForSelector('#currentPasswordSetup')
  await page.type('#currentPasswordSetup','Xyz@12345')
  //fix me not successful
  await page.waitForSelector('#initalToken')
  await page.type('#initalToken','123456')

  await page.waitForSelector('#setupTwoFactorAuth')
  await page.click('#setupTwoFactorAuth')

  //last login  
  await page.waitFor(2000)
  await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')
  
  await page.waitForSelector('button[aria-label="Show Privacy and Security Menu"]')
  await page.click('button[aria-label="Show Privacy and Security Menu"]')
  await page.waitFor(2000)
  const [privSec6] = await page.$x("//span[contains(., 'Last Login IP')]");
  if (privSec6) {
    await privSec6.click();
  }
  // customer feedback
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  
  await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(6) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(6) > .mat-list-item-content')
  
  await page.waitForSelector('#comment')
  await page.type('#comment',"superb")
  
  await page.waitForSelector('#rating')
  await page.$eval('#rating', e => {
  e.setAttribute('aria-valuetext', '1*');
  e.setAttribute('aria-valuenow', '1');
  document.getElementById("rating").classList.add('cdk-focused');
  document.getElementById("rating").classList.add('cdk-mouse-focused');
  });
  await page.waitFor(1000)
  await page.waitForSelector('.mat-slider-thumb-label-text')
  const thumbElement = await page.$(".mat-slider-thumb-label-text");
  await page.evaluate(element => element.textContent='1*' , thumbElement);
  await page.click('#rating');


  await page.waitFor(1000) 
  
  await page.waitForSelector('#captcha')
  let element = await page.$('#captcha')
  let value = await page.evaluate(el => el.textContent, element)
  let evalVal = new Function('return '+value)()
  
  await page.waitForSelector('#captchaControl')
  await page.type('#captchaControl',String(evalVal))
  
  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')
  
  //complain
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  
  await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(7) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(7) > .mat-list-item-content')
  
  await page.waitForSelector('#complaintMessage')
  await page.type('#complaintMessage',"nothing")

  await page.waitForSelector('#submitButton')
  await page.click('#submitButton')

  //support chat
  await page.waitForSelector('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  await page.click('.mat-drawer-content > app-navbar > .mat-toolbar > .mat-toolbar-row > .mat-focus-indicator:nth-child(1)')
  
  await page.waitForSelector('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(8) > .mat-list-item-content')
  await page.click('.mat-drawer-inner-container > .ng-tns-c207-0 > .mat-nav-list > .mat-list-item:nth-child(8) > .mat-list-item-content')
  
  await page.waitForSelector('#message-input')
  await page.type('#message-input',"xyz").then(async () => {
        await page.keyboard.press("Enter");
  });

  //change profile name and image 
  /*await page.waitForSelector('#navbarAccount')
  await page.click('#navbarAccount')

  await page.waitFor(5000)
  
  await page.waitForSelector('button[aria-label="Go to user profile"]')
  await page.click('button[aria-label="Go to user profile"]')

  await page.waitForSelector('#url')
  await page.type('#url','https://media.giphy.com/media/l3vQZT84QqVUKUWE8/giphy.gif')
  
  await page.waitForSelector('#submitUrl')
  await page.click('#submitUrl')

  await page.waitForSelector('#username')
  await page.type('#username','Xyz')

  await page.waitForSelector('#submit')
  await page.click('#submit')*/
 //jalangi button
  //await page.waitForSelector('.mat-app-background > #jalangi_results_show_button > button')
  //await page.click('.mat-app-background > #jalangi_results_show_button > button')
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
              data = J$.CallTrace
              //iidToLocMap = J$.LocMap;
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
      //console.log(data)
  /*var getMap = async () => {  
        return await page.evaluate(async () => {
          return await new Promise((resolve) => {
            try {
              resolve(J$.LocMap);
            } catch (error) {
              reject(error);
            }
          }).catch((error) => {
            console.error(error);
          });
        });
      };
      iidToLocMap = await getMap().catch((error) =>
        console.log(`Error reading output: ${error}.`)
      );*/
      await browser.close();
      var t1 = performance.now()
      console.log("It took " + ((t1 - t0)/60000) + " minutes to get the data.")    
        //console.log( " Number of items : "+data.length)
        //console.log(iidToLocMap)
        //console.log( " Size of Location Map : "+Object.keys(iidToLocMap).length)*/
        /*"fs.writeFileSync(outpath, data, function (err) {
          if (err) throw err;
          console.log("complete");
          });*/
        var out = "[";
        for (var indx = 0; indx < data.length - 1; indx++) {
        out += JSON.stringify(data[indx], null, 1) + ",";
        }
        out += JSON.stringify(data[data.length - 1], null, 1) + "]";
        fs.writeFileSync(outpath, out, function (err) {
        if (err) throw err;
        console.log("complete");
        });
        //var t2 = performance.now()
        //console.log("It took " + ((t2 - t0)/60000) + " minutes to write the data.")
})();
//node experiments/pupServ.js ToDoMVC-framework-folder output-json-file