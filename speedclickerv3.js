const puppeteer = require ("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://clickspeedtest.com/")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    var counter = 0;
    var start = Math.floor(Date.now());
    while (true) {
        page.click('#clicker')
        if (Math.floor(Date.now()) - start > 5000) break;
        console.log(counter); counter++;
    } 
    await page.click('nav')
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await page.evaluate(() => {
        let result = document.querySelectorAll("b")
        const results = [...result]
        return (results.map (w=> w.innerText));
    })
    console.log('\n', res[4], '\n', res[5], '\n', "_________________________");
    process.exit();
})();