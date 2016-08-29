const Page = require('./page');
const PopupHandler = require('../pageobjects/popup.handler');

const UserForm = Object.create(Page, {

    username:           { get: function () { return browser.element('input[name="login-nickname"]'); } },
    password:           { get: function () { return browser.element('#login-password'); } },
    loginbutton:        { get: function () { return browser.element('.form-item button'); } },
    logoutbutton:       { get: function () { return browser.element('.btn--link'); } },
	nickname:           { get: function () { return browser.getText('.nickname'); } },

    open:{
		  value(){
			     Page.open.call(this, 'http://gametwist.com');
		  }
	  },
    login:{
      value(name, password, timeout){
        UserForm.username.setValue(name);
        UserForm.password.setValue(password);
        UserForm.loginbutton.click();

        browser.waitUntil(() => UserForm.nickname === name, timeout, 'expected user to be logged in after '+ timeout + 'ms');
		
		PopupHandler.closePopups();
      }
    },
    logout:{
      value(timeout){
        browser.moveToObject('.nickname');
        UserForm.logoutbutton.click();
        browser.waitUntil(() => browser.isVisible('#login-password'), timeout, 'expected user to be logged out after '+ timeout + 'ms');
      }
    }
});

module.exports = UserForm;
