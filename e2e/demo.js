/* eslint-disable */
// module.exports = {
//   'Demo test': (browser) => {
//     browser
//       .url('http://localhost:3000');
//   },
// };

// module.exports = {
//   'Demo test': function (browser) {
//     browser
//       .url('http://localhost:3000')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'Eddie Lang')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .click('button[name=btnG]');
//   },
// };

// module.exports = {
//   'Demo test' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'lee scratch perry')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .click('button[name=btnG]')
//       .pause(1000)
//       .assert.containsText('#main', 'dub')
//       .end(); // close the browser, without this it is a bot
//   }
// };