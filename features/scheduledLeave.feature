Feature: Scheduled leave functionality

  Scenario: Search for scheduled leave
    Given Alice logs into OrangeHR
    When Alice navigates to Leave
    Then Alice can set a date range
    And Alice can search for scheduled leave