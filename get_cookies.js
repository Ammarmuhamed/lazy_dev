const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Go to Discord login page
    await page.goto('https://discord.com/login', { waitUntil: 'networkidle2' });

    // Wait for the login form and manually log in
    await page.waitForSelector('input[name="email"]' , { timeout: 10000 }); // waiting for 10 seconds untill that selector is found
    console.log("Please log in manually...you have 60 seconds");
    
    await new Promise(resolve => setTimeout(resolve, 60000));

    
    // Save cookies after logging in
    const cookies = await page.cookies();
    fs.writeFileSync('./cookies.json', JSON.stringify(cookies));

    console.log('Cookies saved to cookies.json');

    await browser.close();
})();
