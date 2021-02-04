# Acceptance Test with cucumber JS

This repository contains a basic structure to create acceptance test project using cucumber-js

## Setup 🚀

```
$ git clone https://github.com/stevenmontoya/acceptance-test-cucumber-js.git
```

### Requirements 📋

_Install dependencies_

```
$ npm i
```

### Running Test 🔧

Running cucumber-js to run acceptance test

```
npm i test
```

### Features

Features define the business logic, cucumber use gherkin syntax to define it.

```
Feature: Login
  Feature The user need user and password to login into the app

  Scenario: Login
    Given the following credentials
      | user     | username_777 |
      | password | 123456       |
    When I request to login
    Then I get suscces status
```

### Steps

The step definitions (Given, When, Then) link the features written in Gherkin and the implementation using javascript

```
Given('the following credentials', function (dataTable) {
  this.baseUrl = dataTable.rowsHash().url;
});


When('I request to login', async function () {
  let res = await get(this.baseUrl);
  this.response = res;
});


Then('I get suscces status', function () {
  strictEqual(this.response.status, 200);
});

```

⌨️ por stevenmontoya
