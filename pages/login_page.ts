import { type Locator, type Page } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly login_form: Locator;
  readonly pass_form: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.login_form = page.getByPlaceholder('Username');
    this.pass_form = page.getByPlaceholder('Password');
    this.login_button = page.getByRole('button', {name: "Login"});
  }

  async auth(login: string, pass: string) {
    await this.login_form.fill(login);
    await this.pass_form.fill(pass);
  }

  async click_login_button() {
    await this.login_button.click();
  }
}