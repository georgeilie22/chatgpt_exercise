# chatgpt_exercise

## Keep in mind the tests can't be runned because of the captcha and login protections implemented by chatgpt against automation tools.

## Getting Started
### Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js: Download and install Node.js
npm: npm is included with Node.js, so no separate installation is needed.
Installation
Clone this repository to your local machine:
```
git clone [https://github.com/your-username/your-project.git](https://github.com/georgeilie22/chatgpt_exercise.git)
```

```
npm install
```
Running Tests
To run the Cypress tests, use the following command:

```
npx cypress run
```
This will open the Cypress Test Runner, allowing you to interactively run tests or execute them in headed mode.

## Automation design pattern

### Page object model
The Page Object Model (POM) is a design pattern used in test automation to enhance the maintainability and readability of automated tests. It is commonly employed in web testing frameworks, including Cypress. The main idea behind POM is to represent each web page or component of a web application as a separate class, encapsulating the interactions with that page or component.

Here's how you can implement the Page Object Model in Cypress:

1. Create Page Classes:

Each web page or component is represented by a separate class.
The class contains methods that represent the actions that can be performed on the page and assertions that validate the state of the page.

2. Use Page Objects in Tests:

In your Cypress test scripts, import and use the Page Objects to interact with the web pages.
By organizing your code using the Page Object Model, you achieve several benefits:

- Modularity: Each page is represented by a separate class, promoting modularity and reusability.
- Readability: Tests become more readable as the high-level actions and assertions are encapsulated in methods.
- Maintainability: Changes to the UI can be isolated to the corresponding Page Object, reducing the impact on the test scripts.
This approach makes it easier to manage and scale your test suite as your application evolves.
Page object models can be found at 
```
cypress/support/page_object
```

### Tests
Cypress comes with a built-in asserting library for making assertions in your test scripts. The assertions are based on Chai, a popular assertion library for JavaScript. Chai provides a readable syntax for expressing expectations about the behavior of your code.
Tests can be found at
```
cypress/e2e
```
