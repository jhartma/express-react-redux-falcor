module.exports = function() {
  this.When(/^I visit the root page$/, function() {
    browser.url("http://localhost:8080")
  })

  this.Then(/^I see "([^"]*)"$/, function(arg1) {
    browser.waitForExist("h1")
    expect(browser.getText("h1")).to.equal(arg1)
  })
}
