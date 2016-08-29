const UserForm = require('../pageobjects/login.page');

describe('UserForm', () => {
        UserForm.open();

    it('should login with the given username and password and close any popup', () => {
        UserForm.login('taskuser3','123test123',5000);
		
		console.log('PASSED: User should login and close popups!');
    });
    it('should logout', () => {
        UserForm.logout();
		
		console.log('PASSED: User should logout!');
    });
});
