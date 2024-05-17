//adding Puppeteer library
const pt = require("puppeteer");
pt.launch({ headless: false }).then(async (browser) => {
  //browser new page
  const p = await browser.newPage();
  //set viewpoint of browser page
  await p.setViewport({ width: 1000, height: 500 });
  //launch URL
  await p.goto("https://www.google.com/maps");
  await p.waitForSelector(".t9f27");
  const spanVal = await p.$eval(".t9f27", (el) => el.innerText);
  console.log(spanVal);

  await browser.close();
});
