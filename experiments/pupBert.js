//const browser = await puppeteer.launch({headless: false});
const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const port = 8888;    
//use pupperteer recorder
      
(async () => {
                const browser = await puppeteer.launch({headless: false});
		const page = await browser.newPage();
		const response = await page.goto('https://chess.com', {
			timeout: 25000,
			waitUntil: 'networkidle2'
                });
                
        const element = await page.$(".live-game-buttons-component");
      })();