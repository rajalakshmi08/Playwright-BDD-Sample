# Playwright-BDD-Sample
Sample POC for Playwright-BDD with Javascript

A  Playwright BDD automation project using JavaScript with Playwright-BDD and Playwright-test
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

### 1.Clone the repository

Clone this repository in to any IDE (Preferably, Visual studio code)

### 2. Install Dependencies

npm install

### 3. Run Tests

npm test


This will:
- Generate test files from feature files (into `.features-gen/`)
- Run the tests in Chromium . The configs can be extended to include other browsers(Firefox, Edge)
- Generate an HTML report
