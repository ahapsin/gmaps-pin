//adding Puppeteer library
const pt = require("puppeteer");
const express = require("express");
const app = express();
const port = 3000;

pt.launch({ headless: false }).then(async (browser) => {
  //browser new page
  const p = await browser.newPage();
  //set viewpoint of browser page
  await p.setViewport({ width: 1000, height: 500 });
  //launch URL
  await p.goto("https://www.google.com/maps");
  //   await p.waitForSelector(".t9f27");
  //   const spanVal = await p.$eval(".t9f27", (el) => el.innerText);

  //   app.get("/", (req, res) => {
  //     res.send(spanVal);
  //   });
  //   await browser.close();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
