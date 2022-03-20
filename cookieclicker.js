const puppeteer = require ("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://orteil.dashnet.org/cookieclicker/")
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    setInterval(function(){ 
        var numItems =  page.$$eval('.product unlocked enabled', ele => ele.length);
        numItems.then(console.log(numItems))
        while (numItems>0) {
            var buying = setInterval(function() {
                page.click(`#product${numItems}`)
                if ($('.product unlocked enabled').length-1==numItems) clearInterval(buying);
            },10);
            numItems--;
        }
        page.click('#bigCookie')
    }, 10);
})();