import { type Locator, type Page } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly loginForm: Locator;
  readonly passForm: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByPlaceholder('Username');
    this.passForm = page.getByPlaceholder('Password');
    this.loginForm = page.getByRole('button', {name: "Login"});
  }

  async auth(login: string, pass: string) {
    await this.loginButton.fill(login);
    await this.passForm.fill(pass);
  }

  async click_login_button() {
    await this.loginButton.click();
  }
}