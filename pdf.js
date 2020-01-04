const puppeteer = require('puppeteer');

(async () => {
  const browser = await  puppeteer.launch() 
  const page = await browser.newPage();
  await page.goto('http://localhost:8080', {waitUntil: 'networkidle2'});

  await page.emulateMedia('screen');
  await page.pdf({path: '王恩博.pdf', format: 'A4',scale: 0.7,margin:{top: '20px',left: '20px',bottom: '20px',right: '20px'}}); // create a PDF
  await browser.close();
})();