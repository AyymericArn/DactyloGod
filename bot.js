const puppeteer = require('puppeteer');
const { URL } = require('url');
const { loginToTFF, sleep } = require('./utils');

/*
** change here the speed, corresponding to sleep time between words (lower is faster), delay betweend each type, pause behavior, and location
*/

const config = {
    speed: 150,
    delay: 0,
    shouldPause: true,
    pauseAfter: 150,
    pauseFor: 10000,
    location: "https://10fastfingers.com/typing-test/french"
}

const wordsEvaluate = () => Array.from(
    document.querySelectorAll("span[wordnr]")
).map(word => word.innerText)

const fillInWords = async (
    puppeteerPage,
    url
) => {
    await puppeteerPage.goto(url);
    await puppeteerPage.waitForSelector("span.highlight");

    // gets the whole word list on a single move
    const wordList = await puppeteerPage.evaluate(wordsEvaluate);

    // here comes the magic
    puppeteerPage.click("input#inputfield.form-control");

    let i = 0;

    for (const word of wordList) {

        if (config.shouldPause) {
            i++;
            if (i === config.pauseAfter) {
                sleep(config.pauseFor);
            }    
        }

        await puppeteerPage.keyboard.type(word + ' ', {delay: config.delay});

        sleep(config.speed);
    }
}

const run = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1000,
            height: 3000,
        }
    });

    if (process.argv[2] && process.argv[3]) {
        const mail = process.argv[2];
        const pass = process.argv[3];

        await loginToTFF(browser, mail, pass);
    }
    
    /*
    ** change URL to change language
    */

    const location = new URL(config.location);

    const page = await browser.newPage();
    
    await fillInWords(page, location);
}

run();