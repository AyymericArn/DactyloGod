const loginToTFF = async (browser, mail, pass) => {
    console.log("Login to 10ff");

  const page = await browser.newPage();

  await page.goto("https://10fastfingers.com/login");

  await page.focus("input#UserEmail");
  await page.keyboard.type(mail);

  await page.focus("input#UserPassword");
  await page.keyboard.type(pass);

  await page.click("button#login-form-submit");

  sleep(5000);

  await page.close();
}

const sleep = (miliseconds) => {
    const currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

module.exports = {
    loginToTFF,
    sleep
}