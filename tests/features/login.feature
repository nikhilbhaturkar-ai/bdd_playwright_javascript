Feature: As a user, I want to log in to the application so that I can access my account.

  @smoke
  Scenario: Successful login with valid credentials
    Given the user navigates to the "https://practicetestautomation.com/practice-test-login/" 
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the dashboard page

  Scenario Outline: Unsuccessful login with invalid credentials
    Given the user navigates to the "https://practicetestautomation.com/practice-test-login/"
    When the user enters "<username>" and "<password>"
    And clicks the login button
    Then the user should be redirected to the dashboard page

    Examples:
      | username    | password    | error_message                  |
      | student     | Password123 | Valid username and password.  |
      | student     | Password12  | Invalid Password      |
      | student     |             | Password cannot be empty.      |
        