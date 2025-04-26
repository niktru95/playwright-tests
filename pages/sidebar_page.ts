import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class SidebarPage extends BasePage {
  readonly burgerMenu: Locator;
  readonly allItemsItem: Locator;

  constructor(page: Page) {
    super(page);
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
    this.allItemsItem = page.getByText('All Items');
  }

  async clickBurgerMenu(): Promise<void> {
    await this.burgerMenu.click();
  }

  async clickAllItems(): Promise<void> {
    await this.allItemsItem.click();
  }
}
