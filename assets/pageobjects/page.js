function Page() {
    this.name = 'Main Page Object';
}

Page.prototype.open = function (path) {
    browser.url(path);
}

module.exports = new Page();