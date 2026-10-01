import {expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '//input[@name="username"]';
    this.passwordField = '//input[@name="password"]';
    this.loginButton = '//button[@id="submit"]';
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameField, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordField, password);
  }

  async clickLoginButton() {
    await this.page.locator(this.loginButton).click();
  }

  async verifyDashboardPage(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}

module.exports = LoginPage;