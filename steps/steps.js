const { test } = require('../fixtures/testContext');
const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const fs = require('fs');
const path = require('path');
const userConfigData = path.join(__dirname, '../config/testData.json');
const usersData = JSON.parse(fs.readFileSync(userConfigData, 'utf8'));
const uiConfigData = path.join(__dirname, '../config/UIConfig.json');
const locatorsConfig = JSON.parse(fs.readFileSync(uiConfigData, 'utf8'));

const { Given, When, Then } = createBdd(test);

// All step definitions
Given('Alice logs into OrangeHR', async ({ loginPagefixture }) => {
  console.log('loginPage fixture:', loginPagefixture);
  await loginPagefixture.userLogin(usersData.validUser); 
});
When('Alice navigates to Leave', async ({ leavePagefixture }) => {
  await leavePagefixture.clickLink(locatorsConfig.leavePage.leaveLinkToClick);
});
 
Then('Alice can set a date range', async ({ leavePagefixture }) => {
  await leavePagefixture.selectDateRange(locatorsConfig.leavePage.dateField);
});

When('Alice can search for scheduled leave', async ({ leavePagefixture }) => {
  await leavePagefixture.searchScheduledLeave();
});
