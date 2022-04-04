Feature: Create a new user account
  In order to be able to use the application
  As a external user
  I want to create an account

  Scenario: A valid non existing user
    Given I send a POST request to "/users" with body:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "user_name": "mstefa",
      "password": "Test1234",
      "first_name": "matias",
      "last_name": "stefanutti",
      "email": "mstefanutti24@gmail.com",
      "country_id": "US",
      "roles": ["USER"],
      "phone_number": "+543415552618"
    }
    """
    Then the response status code should be 201
    And the response should be empty
