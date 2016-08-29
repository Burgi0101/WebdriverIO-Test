const LanguageSwitcher = require('../pageobjects/language.switcher.page');

describe('Language Switcher', () => {

    it('should switch the language', () => {
        LanguageSwitcher.open();
        LanguageSwitcher.switchLanguage(5000);

        expect(browser.getTitle()).toBe('Online Casino Spiele kostenlos spielen | Gametwist Casino');
		console.log('PASSED: LanguageSwitcher should switch language!');
    });
});
