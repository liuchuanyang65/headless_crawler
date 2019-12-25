const puppeteer = require('puppeteer');
const path = require('path');
const dConfig = require('../config/defaultConfig');

// 立即执行函数
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com')
    await page.screenshot({
        path: `${dConfig.screenshot}/${Date.now()}.png`
    })

    await browser.close()
})()
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.baidu.com');
//   await page.screenshot({path: `${dConfig.screenshot}/${Date.now()}.png`});

//   await browser.close();
// })();