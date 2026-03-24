/**
 * Test Context & Utilities
 * Shared fixtures and helpers for test execution
 */

const { test: base } = require('playwright-bdd');
const { loginPage } = require('../pages/loginPage');
const { leavePage } = require('../pages/leavePage');

const test = base.extend({
  loginPagefixture: async ({ page }, use) => {
    const loginPageObj = new loginPage(page);
    await use(loginPageObj);
  },
  leavePagefixture: async ({ page }, use) => {
    const leavePageObj = new leavePage(page);
    await use(leavePageObj);
  }
});

module.exports = { test };
