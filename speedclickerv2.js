const puppeteer = require ("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://clickspeedtest.com/")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    var counter = 0;
    try {
        while (page.$('#clicker')!==null) {
          await page.click('#clicker')
          console.log(counter); counter++;
          if (page.$('#clicker')===null) break;
        } 
    }
    catch {
        await page.click('nav')
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await page.screenshot({ path: './pictures/speedclicker.png', fullPage: false });
        const res = await page.evaluate(() => {
            let result = document.querySelectorAll("b")
            const results = [...result]
            return (results.map (w=> w.innerText));
        })
        console.log('\n', res[4], '\n', res[5], '\n', "______________________");
        return 0;
    }
})();