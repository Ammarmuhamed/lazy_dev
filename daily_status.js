const puppeteer = require('puppeteer');
const fs = require('fs');
const { time } = require('console');

cron.schedule('0 9 * * *', async () => {
    // run every 9:00 AM , you can change it to any time you want

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log("awaiting for launching...");

    // const cookies = JSON.parse(fs.readFileSync('./cookies.json', 'utf8'));
    // await page.setCookie(...cookies); 
    // should wait until cookies are set by running get_cookies.js
    
    const channelUrl = 'https://discord.com/channels/@me/1344611085646303272';
    await page.goto(channelUrl, { waitUntil: 'networkidle2' }, { timeout: 60000 }); // waiting for 60 seconds to log in
    console.log("You are logged in and on the desired channel!");

    await page.waitForSelector('div[role="textbox"]'); // try find selector 


    await page.type('div[role="textbox"]', 'hello team i will continue work on  project', { delay: 50 }); // use delay to make typing more natural 
    await page.keyboard.press('Enter');
    console.log("Message sent successfully!");

    await page.waitForTimeout(5000);
    await browser.close();
})();
