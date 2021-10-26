const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://pagekit.com/')
  
  await page.setViewport({ width: 1440, height: 704 })
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(2) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(2) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(3) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(3) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(4) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(4) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(5) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(5) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(6) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(6) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(2) > a')
  await page.click('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(2) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(3) > a')
  await page.click('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(3) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(4) > a')
  await page.click('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(4) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(5) > a')
  await page.click('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(5) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(6) > a')
  await page.click('.tm-sidebar > .uk-panel > .uk-nav > li:nth-child(6) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-width-medium-3-4 > .uk-article > .uk-grid > .uk-panel:nth-child(1) > .tm-border')
  await page.click('.uk-width-medium-3-4 > .uk-article > .uk-grid > .uk-panel:nth-child(1) > .tm-border')
  
  await page.waitForSelector('.uk-grid > .uk-panel:nth-child(1) > .uk-subnav > li:nth-child(2) > a')
  await page.click('.uk-grid > .uk-panel:nth-child(1) > .uk-subnav > li:nth-child(2) > a')
  
  await navigationPromise
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(5) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(5) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-grid > .uk-width-1-1 > .uk-article:nth-child(2) > .uk-article-title > a')
  await page.click('.uk-grid > .uk-width-1-1 > .uk-article:nth-child(2) > .uk-article-title > a')
  
  await navigationPromise
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(3) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(3) > a')
  
  await navigationPromise
  
  await page.waitForSelector('#marketplace > .uk-position-relative > .uk-tab > li:nth-child(2) > a')
  await page.click('#marketplace > .uk-position-relative > .uk-tab > li:nth-child(2) > a')
  
  await navigationPromise
  
  await page.waitForSelector('#marketplace > .uk-position-relative > .tm-search > .uk-search > .uk-search-field')
  await page.click('#marketplace > .uk-position-relative > .tm-search > .uk-search > .uk-search-field')
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(2) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(2) > a')
  
  await navigationPromise
  
  await page.waitForSelector('#tm-top-a > .uk-container > .uk-grid > .uk-width-medium-1-1 > .uk-panel > .uk-grid:nth-child(3) > .uk-width-medium-1-2 > .tm-box-shadow > .uk-overlay-panel')
  await page.click('#tm-top-a > .uk-container > .uk-grid > .uk-width-medium-1-1 > .uk-panel > .uk-grid:nth-child(3) > .uk-width-medium-1-2 > .tm-box-shadow > .uk-overlay-panel')
  
  await page.waitForSelector('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(1) > a')
  await page.click('.uk-navbar > .uk-position-top > .uk-navbar-nav > li:nth-child(1) > a')
  
  await navigationPromise
  
  await browser.close()
})()