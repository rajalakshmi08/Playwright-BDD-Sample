const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, '../screenshots');

const uiConfigData = path.join(__dirname, '../config/UIConfig.json');
const locatorsConfig = JSON.parse(fs.readFileSync(uiConfigData, 'utf8'));
const uitestData = path.join(__dirname, '../config/testData.json');
const testConfig = JSON.parse(fs.readFileSync(uitestData, 'utf8'));

class loginPage {
  constructor(page) {
    this.page = page;
    // Initialize locators from config
    this.usernameInput = page.locator(locatorsConfig.loginPage.usernameInput);
    this.passwordInput = page.locator(locatorsConfig.loginPage.passwordInput);
    this.loginButton = page.locator(locatorsConfig.submitButton);
  }

  async userLogin(user) {
    await this.goto();
    await this.enterUsername(user.username);
    await this.enterPassword(user.password);
    await this.page.screenshot({ path: path.join(folder, 'login.png'), fullPage: true });
    await this.submitButton();
  }

  async goto() {
    console.log('Navigating to base URL:');
    try {
      // Navigate to the base URL defined in the configuration
      await this.page.goto('/');
      await expect(this.page.getByText(testConfig.homePageTextToVerify)).toBeVisible();
      const isTextVisible = await this.page.getByText(testConfig.homePageTextToVerify).isVisible();
      if (isTextVisible) {
        console.log('Login Page is loaded: Passed');
      } else {
        console.log('Login Page is not loaded: Failed');
      }
    } catch (error) {
      console.error('Error during page navigation:', error.message);
      throw error;
    }
  }

  async enterUsername(username) {
    try {
      await expect(this.usernameInput).toBeVisible();
      await this.usernameInput.fill(username);
    }
    catch (error) {
      console.error('Username not able to fill:', error.message);
      throw error;
    }
  }

  async enterPassword(password) {
    try {
      await expect(this.passwordInput).toBeVisible();
      await this.passwordInput.fill(password);
    }
    catch (error) {
      console.error('Password not able to fill:', error.message);
      throw error;
    }
  }

  async submitButton() {
    try {
      //Clicking on login button
      await expect(this.loginButton).toBeVisible();
      await this.loginButton.click();
      await expect(this.page.getByText(testConfig.buttonToVerify)).toBeVisible();
      const isButtonVisible = await this.page.getByText(testConfig.buttonToVerify).isVisible(); 
      if (isButtonVisible) {
        console.log('Login successful: Passed');
      } else {
        console.log('Login failed: Failed');
      }
    } catch (error) {
      console.error('Not able to login with the provided credentials:', error.message);
      throw error;
    }
  }

}

module.exports = { loginPage };