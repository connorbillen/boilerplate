Feature: Test Feature Name 

  As a user
    I want to be able to test Test 

#  Test (base)
  @us21194
  Scenario: Get Data Categories
    When I request my data categories without channels
    Then I should see my data categories
