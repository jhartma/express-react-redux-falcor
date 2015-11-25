 Feature: See hello message

  As a visitor
  I want to visit the page
  So I can see the message

  @watch
  Scenario: See hello message
    When I visit the root page
    Then I see "Hello world"
