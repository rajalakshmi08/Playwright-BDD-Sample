const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, '../screenshots');
const { test } = require('playwright-bdd');
const uiConfigData = path.join(__dirname, '../config/UIConfig.json');
const locatorsConfig = JSON.parse(fs.readFileSync(uiConfigData, 'utf8'));
const uitestData = path.join(__dirname, '../config/testData.json');
const testConfig = JSON.parse(fs.readFileSync(uitestData, 'utf8'));

class leavePage {
  constructor(page) {
    this.page = page;
  }

  async clickLink(link) {
      try {
        //Clicking on leave link
        await this.page.getByRole('link', { name: link}).click();
        await expect(this.page.getByText(testConfig.leaveTextToVerify)).toBeVisible();
        const isTextVisible = await this.page.getByText(testConfig.leaveTextToVerify).isVisible(); 
        
        if (isTextVisible) {
          console.log(`${link} Link navigated successfully: Passed`);
        } else {
          console.log(`${link} Link not found: Failed`);
        }
      } catch (error) {
        console.error('Not able to click the link:', error.message);
        throw error;
      }
    }

    async selectDateRange(dateField) {
      try {
        //Clicking on reset button to clear the default selected date range
        await this.page.locator(locatorsConfig.leavePage.resetButton).click();
        //Selecting from and to date range
        await expect(this.page.locator(locatorsConfig.leavePage.dateField).nth(0)).toBeVisible();
        const isFieldVisible = await this.page.locator(locatorsConfig.leavePage.dateField).nth(0).isVisible(); 
        if (isFieldVisible) {
             await this.page.locator(locatorsConfig.leavePage.dateField).nth(0).fill(testConfig.fromDateValue);
        } else {
            console.log('Date field is not visible:Failed');
        }
        await expect(this.page.locator(locatorsConfig.leavePage.dateField).nth(1)).toBeVisible();
        const isFieldVisible1 = await this.page.locator(locatorsConfig.leavePage.dateField).nth(1).isVisible(); 
        if (isFieldVisible1) {
             await this.page.locator(locatorsConfig.leavePage.dateField).nth(1).fill(testConfig.toDateValue);
        } else {
            console.log('Date field is not visible:Failed');
        }
        await this.page.screenshot({ path: path.join(folder,'selectedDateRange.png'), fullPage: true });
        console.log('Date range selected successfully: Passed');
      } catch (error) {
        console.error('Not able to select date range:', error.message);
        throw error;
      }
    }

    async searchScheduledLeave() {
      try {
        console.log('Selecting scheduled leave range...');
        //Selection of option from dropdown
        await this.page.locator('.oxd-select-text-input').first().click();
        await expect(this.page.getByText(testConfig.scheduledTextToVerify)).toBeVisible();
        //Selecting Scheduled option from dropdown
        await this.page.getByText(testConfig.scheduledTextToVerify).click();

       

        //Clicking on search button
        await expect(this.page.locator(locatorsConfig.submitButton)).toBeVisible();
        await this.page.locator(locatorsConfig.submitButton).click();

        await this.page.waitForSelector(locatorsConfig.leavePage.tableRow);
        const rows = this.page.locator(locatorsConfig.leavePage.tableRow);

        await expect(this.page.getByRole('columnheader', { name: locatorsConfig.leavePage.commentsHeader })).toBeVisible();
        const isTableVisible = await this.page.getByRole('columnheader', { name: locatorsConfig.leavePage.commentsHeader }).isVisible();
        if (isTableVisible) {
            console.log('Grid table visible: Passed');
        } else {
            console.log('Grid table not visible: Failed');
        } 

        if (await rows.count() > 1) {
            console.log('Grid loaded successfully with records');
        } else {
            console.log('Grid loaded sucessfully with no records found');
        }
        await this.page.screenshot({ path: path.join(folder, 'searchResults.png'), fullPage: true });
      } catch (error) {
        console.error('Not able to select the option:', error.message);
        throw error;
      } 
    }
}
module.exports = { leavePage };