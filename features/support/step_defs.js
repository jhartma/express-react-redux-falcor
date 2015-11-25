module.exports = function() {
  this.When(/^I visit the root page$/, function() {
    browser.url("http://localhost:8080")
  })

  this.Then(/^I see an element "([^"]*)" with the content "([^"]*)"$/, function(arg1, arg2) {
    browser.waitForExist(arg1)
    expect(browser.getText(arg1)).to.equal(arg2)
  })
}
