// Generated from: features\scheduledLeave.feature
import { test } from "../../fixtures/testContext.js";

test.describe('Scheduled leave functionality', () => {

  test('Search for scheduled leave', async ({ Given, When, Then, And, leavePagefixture, loginPagefixture }) => { 
    await Given('Alice logs into OrangeHR', null, { loginPagefixture }); 
    await When('Alice navigates to Leave', null, { leavePagefixture }); 
    await Then('Alice can set a date range', null, { leavePagefixture }); 
    await And('Alice can search for scheduled leave', null, { leavePagefixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\scheduledLeave.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Alice logs into OrangeHR","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Alice navigates to Leave","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Alice can set a date range","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And Alice can search for scheduled leave","stepMatchArguments":[]}]},
]; // bdd-data-end