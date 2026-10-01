import { createBdd,test } from 'playwright-bdd';
// import { test } from '../fixtures/fixture';
const { Before, Given, When, Then } = createBdd(test);
const LoginPage = require('../pages/LoginPage');

Given('the user navigates to the {string}', async ({ page }, url) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo(url);
});

When('the user enters valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.enterUsername('student');
  await loginPage.enterPassword('Password123');
});

When('clicks the login button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.clickLoginButton();
});

Then('the user should be redirected to the dashboard page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.verifyDashboardPage('https://practicetestautomation.com/logged-in-successfully/');
});

When('the user enters {string} and {string}', async ({ page }, username, password) => {
  const loginPage = new LoginPage(page);
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});