const Page = require('./page');

const LanguageSwitcher = Object.create(Page, {

      button:  { get: function () { return browser.element('.select-language__button'); } },
      germanyFlag: { get: function () { return browser.element('#branding > div.branding__content.float--right.anonymous > div.select-language.flyout > ul > li:nth-child(2)'); } },

      open:{
  		    value(){
  			       Page.open.call(this, 'http://gametwist.com');
  		    }
        },
      switchLanguage:{
        value(timeout){
          LanguageSwitcher.button.click();
          browser.waitUntil(() => browser.isVisible('#branding > div.branding__content.float--right.anonymous > div.select-language.flyout > ul > li:nth-child(2)'), timeout, 'expect germany flag to be visible within ' + timeout + 'ms');
          LanguageSwitcher.germanyFlag.click();
        }
      }
});

module.exports = LanguageSwitcher;
