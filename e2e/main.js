/* eslint-disable */
const viewport_widths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];
const imageDir = name => __dirname + '/screenshots/sizes/' + name + '.png';
// const browserName = browser.options.desiredCapabilities.browserName;  

// tests that your page works
// const url = 'http://localhost:3000';

module.exports = {
  'Loads page with title': (browser) => {
      let main = browser.page.main();
    main
        .navigate()
        .waitForElementVisible('body', 1000)
        .assert.containsText('@title', 'HEARDit');
    browser.end();
  },
//   'Loads list of albums': (browser) => {
//     browser
//       .url(url)
//       .waitForElementVisible('div', 1000)
//       .elements('class name', 'albumContainer', (result) => {
//         browser.assert.equal(result.value.length > 0, true);
//       })
//       .end();
//   },
//   'Votes item up once on click': (browser) => {
//     browser
//       .url(url)
//       .waitForElementVisible('span', 1000)
//       .assert.containsText('.btn', '2')
//       .click('.btn')
//       .assert.containsText('.btn', '3')
//       .click('.btn')
//       .assert.containsText('.btn', '3')
//       .end();
//   },
// test for different screen sizes
// 'Take photos': (browser) => {
//     browser
//       .url(url)
//       .waitForElementVisible('body', 1000);
//     viewport_widths.forEach(width => {
//     browser
//     .resizeWindow(width, 300)
//     // saves with browser name
//     .saveScreenshot(imageDir(`page-${browserName}-${width}`));
//     });
//     browser.end();
//   }  

};




