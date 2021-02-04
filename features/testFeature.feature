Feature: Get Random Dog
  Feature to test axios request to enpoint

  Scenario: Get Random Dog
    Given the dog api radom url
      | url | https://dog.ceo/api/breeds/image/random |
    When I request to get random dog
    Then I get suscces status