import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Selectors } from '../selectors/selectors';

export class LogoutPage extends BasePage {
  readonly burger: Locator;

  constructor(page: Page) {
    super(page);
    this.burger = page.getByRole('button', { name: 'Open Menu' });
  }

  async clickBurgerMenu(): Promise<void> {
    await this.burger.click();
  }

  async clickLogoutButton(): Promise<void> {
    await this.clickElement(Selectors.LogoutButton);
  }
}
