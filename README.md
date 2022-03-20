# speedclicking
Webscraping NodeJS application to reach extremely high click scores
<br>

## How it works
Puppeteer application is launched and goes to https://clickspeedtest.com/ <br>
From here the application: 
<ul>
  <li>Waits 1000ms for the page to load</li>
  <li>Finds the click box by ID</li>
  <li>Begins clicking it repeatedly (optimisations and processes detailed below)</li>
  <li>End result is scraped from website using ID yet again and is displayed in console</li>
</ul>

## v3
##### Best attempt: 25,472 clicks in 5 seconds (233% better than the best human clicker)
Version 3 is a big step up in optimisation. <br>
The following are the biggest changes: <br>
"Awaiting" click element → simply giving a click function and not checking if it exists <br>
Halting loop after element is not found → running a clock to compute until 5 seconds are passed and then breaking <br>
Screenshotting result → scraping data from the site and directly logging it to console <br>

It is clear that the optimisations have worked heavily. One further optimisation that removes a sense of user connection is removing the console log and counter elements. These elements waste computing time just to show the user what is happening behind the scenes. <br>

## v4
##### Adapted to cookie clicker!
Version 4 takes clicking to the next level with cookie clicker. <br>
The majority of the algorithms and ideas remain the same however this time: <br>
<ul>
  <li>Greedy algorithm to buy the most expensive "enhancer" product every 10s</li>
  <li>Timed loop to prevent overflow and accidental mass spamming issues</li>
  <li>Multilevel clicking to simultaneously get cookies whiles enhancing</li>
</ul>

## v2
##### Best attempt: 107 clicks in 5 seconds (41% better than the best human clicker)
Version 2 is the same as version 1, except this time, a screenshot is taken at the end of the process to show what the webpage shows to the user. <br>

## v1
##### Best attempt: 107 clicks in 5 seconds (41% better than the best human clicker)
Version 1 is a while loop that "awaits" the clicker tag ID and clicks it if this is present on the page. 
This works because as soon as the time is up, the button is hidden. <br>
However, there are two issues that arise: 
<ul>
  <li>The HTML is parsed and checked after every cycle</li>
  <li>Checking repeatedly for an element that is known to exist for 5 seconds long is purposeless</li>
</ul>
If the element is not found, it return an error which is "caught" and parsing of the results ensues. <br>

### How to use it
If a NodeJS environment is set up, download the version file. <br>

  Install all dependencies using `npm` (`npm install puppeteer` is the only one). <br>
  Run it in console - `Ctrl+Shift+C` to open console (VSCode), then `node speedclicker*version number*.js`. <br>
  The file will execute! <br><br>
  If you would like to visually see what is happening, simply flip the following boolean from: <br>
  `const browser = await puppeteer.launch({headless:true});` → `const browser = await puppeteer.launch({headless:false});`

