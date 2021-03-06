const Browser = require('zombie');
Browser.localhost('example.com', 3000);

describe('User visits homepage', () => {
  const browser = new Browser();

  before((done) => {
    browser.visit('', done);
  });
 
  it('should be successful', () => {
    browser.assert.success();
  });

  it('should see homepage with title "DEMO"', () => {
    browser.assert.text('title', 'DEMO');
  });
});
