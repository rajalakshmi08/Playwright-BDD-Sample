import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/testContext';

const { Given, When, Then, BeforeStep, AfterStep } = createBdd(test);

Before(test, async () => {
  console.log('Starting scenario...');
});

After(test, async () => {
  console.log('Scenario finished...');
});