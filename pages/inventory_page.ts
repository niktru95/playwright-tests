import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Selectors } from '../selectors/selectors';

export class InventoryPage extends BasePage {
  readonly burgerMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
  }

  async clickLinkBackToProducts(): Promise<void> {
    await this.page.getByTestId(Selectors.InventoryItemName).first().click();
  }
}
