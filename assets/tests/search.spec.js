const Search = require('../pageobjects/search.page');
const UserForm = require('../pageobjects/login.page');


describe('Search', () => {
        Search.open();

    it('should search for Slot games and click the secondlast item', () => {
        UserForm.login('taskuser','123test123', 5000);

        Search.input.setValue('Slot');
        Search.button.click();
        Search.waitUntilListIsShown(5000);

        const numberOfItems = Search.resultList.value.length;
        expect(numberOfItems).toBe(5);

        browser.click('.game-search__list>li:nth-child(' + 4 + ')');

        expect(Search.gameDetails.getText()).toBe('Play 13 online');
		
		console.log('PASSED: Search for Slot games and click the secondlast item!');
    });
});
