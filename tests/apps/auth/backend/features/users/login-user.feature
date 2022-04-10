Feature: Create a new user account
  In order to be able to use the application
  As a register user
  I want to login and recive an authentication token

  Scenario: A registered user
    Given I send a POST request to "/users/login" with body:
    """
    {
      "email": "mstefanutti24@gmail.com",
      "password": "Test1234"
    }
    """
    Then the response status code should be 202
    Then the response should have a body with a truthy property named "token"

