const puppeteer = require('puppeteer');


exports.fetch = (callback) => {
  puppeteer.launch().then(async (browser) => {
    const page = await browser.newPage();
    await page.goto('https://www.tokyu.co.jp/unten2/unten.html');

    const data = await page.evaluate(() => {
      const dataList = {};
      const nodeList = document.querySelectorAll('tr');
      nodeList.forEach((node) => {
        const info = {};
        info.name = node.childNodes[1].innerText;
        info.status = node.childNodes[3].innerText;

        const line = node.className.length ? node.className : 'sample';
        dataList[line] = info;
      });

      return dataList;
    });
    browser.close();

    callback(data);
  });
};
