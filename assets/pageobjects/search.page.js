const Page = require('./page');

const Search = Object.create(Page, {

      input:       { get: function () { return browser.element('input[name="ctl00$cphNavAndSearch$ctl01$gameSearch"]'); } },
      button:      { get: function () { return browser.element('.game-search__button'); } },
      resultList:  { get: function () { return browser.elements('.game-search__list>.game-search__item'); } },
      gameDetails: { get: function () { return browser.element('.box>.h1'); } },

      open:{
  		    value(){
  			       Page.open.call(this, 'http://gametwist.com');
  		    }
  	  },
      waitUntilListIsShown: {
        value(timeout){
            browser.waitUntil(() => browser.isVisible('.game-search__results-sum'), timeout, 'expect games list to be visible within ' + timeout + 'ms');
        }
      }
});

module.exports = Search;
