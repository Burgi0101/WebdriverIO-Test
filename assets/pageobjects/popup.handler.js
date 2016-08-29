const page = require('./page');
	
const PopupHandler = Object.create(page, {
	
	twistsPopup:        { get: function () { return browser.element('.mm-prompt-body'); } },
    twistsPopupButton:  { get: function () { return browser.element('.mm-prompt-close'); } },
	dailyPopup:         { get: function () { return browser.element('.WOF-popup'); } },
    dailyPopupButton:   { get: function () { return browser.element('.WOF-overlay>.btn'); } },
	
	closePopups: {
      value(timeout){
		try{
			if(this.twistsPopup.waitForVisible(timeout))
				PopupHandler.twistsPopupButton.click();
			
			if(this.dailyPopup.waitForVisible(timeout)){
				PopupHandler.dailyPopup.click();
				PopupHandler.dailyPopupButton.waitForVisible(15000);
				PopupHandler.dailyPopupButton.click();
			}
		}
		catch(error){
			console.log('Popup was not visible \n\rError: ' + error.message);
		}
	  }
	}
});

module.exports = PopupHandler;