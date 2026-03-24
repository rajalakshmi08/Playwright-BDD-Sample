const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['steps/**/*.js', 'fixtures/**/*.js'],
});

module.exports = defineConfig({
  testDir,
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    trace: 'on-first-retry',
    screenshot: 'on',
    retries: 2,
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },  
  ],
});
