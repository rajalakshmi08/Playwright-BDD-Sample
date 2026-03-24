# Playwright-BDD-Sample

A  Playwright BDD automation project using JavaScript with Playwright-BDD and Playwright-test. The Project implements the concepts of Page Object Models, managed configuration, and segregated data to support maintainable automated tests.

### Key Features
1. Behaviour Driven Development
Scenarios written in .feature files under the features/ folder.

2. Page Object Model (POM)
Pages are encapsulated in pages/ folder for modularity:
loginPage.js – Login page actions and locators.
leavePage.js – Leave management page actions.
Promotes reusable functions, making tests cleaner and easier to maintain.

3. Centralized Test Data and UI Config
config/testData.json – All test input data centralized.
config/UIConfig.json – Stores UI locators for easy updates without modifying test scripts.

4. Reusable Fixtures & Utilities
fixtures/testContext.js – Provides browser and page objects

5. Step Definitions
Maps BDD steps to actual automation code.
Simplifies adding new feature scenarios without touching page objects or fixtures.

6. Logging and Reporting
   Supports step-level logs and screenshots for each step.
   Can integrate with HTML or console reporters via playwright.config.js.
   screenshots are stored in screenshots/

7. Configuration
   playwright.config.js – Central configuration for:
   Browser settings (headless/headed)
   Timeouts and retriesReporter
   configuration
   Screenshot and video options

8. Project Organization
    Well-structured folders for config, pages, features, fixtures, steps.
   Easy to scale and maintain multiple feature files, pages, and utilities.

## Project Structure
Playwright-BDD-Sample/
```
├── config/
│ ├── testData.json # Test Data for the scenarios
│ └── UIConfig.json # Locators for the test scripts
├── features/
│ └── scheduledLeave.feature # BDD scenarios
├── fixtures/
│ └── testContext.js # Shared test context & utilities
├── pages/
│ ├── loginPage.js # Page Object Model for Login Page
│ └── leavePage.js # Page Object Model for Leave Page
├── steps/
│ └── steps.js # Step definitions
├── playwright.config.js # Configuration
├── package.json # Dependencies
└── README.md # Project documentation
```

## Quick Start

### 1. Clone the repository

Clone this repository in to any IDE (Preferably, Visual studio code)

### 2. Change directory to Playwright-BDD-Sample

cd Playwright-BDD-Sample

### 3. Install Dependencies

npm install

### 4. Run Tests

npm test

This will:
- Generate test files from feature files (into `.features-gen/`)
- Run the tests in Chromium . The configs can be extended to include other browsers(Firefox, Edge)
- Generate an HTML report and screenshots
