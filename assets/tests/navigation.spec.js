const Navigation = require('../pageobjects/navigation.page');

describe('Navigation', () => {
    Navigation.open();

  it('should navigate to Slots', () => {
	Navigation.waitUntilNavigationIsvisible(5000);
    Navigation.slot.click();
    Navigation.waitForTitelToChange('Free Slot Games online | Play for Free at GameTwist', 2000);
	
	console.log('PASSED: Navigation should navigate to Slots!');
  });
  it('should navigate to Bingo', () => {
	Navigation.waitUntilNavigationIsvisible(5000);
    Navigation.bingo.click();
    Navigation.waitForTitelToChange('Free Bingo Games | Play now for Free at GameTwist', 2000);
	
	console.log('PASSED: Navigation should navigate to Bingo!');
  });
  it('should navigate to Casino', () => {
	Navigation.waitUntilNavigationIsvisible(5000);
    Navigation.casino.click();
    Navigation.waitForTitelToChange('Free Casino Games Online | Play for Free at GameTwist', 2000);
	
	console.log('PASSED: Navigation should navigate to Casino!');
  });
  it('should navigate to Poker', () => {
	Navigation.waitUntilNavigationIsvisible(5000);
    Navigation.poker.click();
    Navigation.waitForTitelToChange('Poker Free Online Play | GameTwist Casino', 2000);
	
	console.log('PASSED: Navigation should navigate to Poker!');
  });
});
