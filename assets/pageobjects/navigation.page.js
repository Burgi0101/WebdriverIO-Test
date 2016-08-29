const Page = require('./page');

const Navigation = Object.create(Page, {

    slot: 	{ get: function () { return browser.element('.nav-main>ul>li:nth-child(1)'); } },
    bingo: 	{ get: function () { return browser.element('.nav-main>ul>li:nth-child(2)'); } },
    casino: { get: function () { return browser.element('.nav-main>ul>li:nth-child(3)'); } },
	poker: 	{ get: function () { return browser.element('.nav-main>ul>li:nth-child(4)'); } },

    open:{
		value(){
		  Page.open.call(this, 'http://gametwist.com');
		}
	  },
	  waitUntilNavigationIsvisible:{
		value(timeout){
		  browser.waitUntil(() => browser.isVisible('#navigation-main'), timeout, 'expected navigation to be visible after '+ timeout + 'ms');
		}
	  },
	  waitForTitelToChange:{
		value(title, timeout){
          browser.waitUntil(() => browser.getTitle() === title, timeout, 'expect title to change after' + timeout +' ms');
		}
	  }
});

module.exports = Navigation;
