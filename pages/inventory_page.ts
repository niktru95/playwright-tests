import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Selectors } from '../selectors/selectors';

export class InventoryPage extends BasePage {
  readonly linkBackToProducts: Locator;
  readonly burgerMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.linkBackToProducts = page.getByTestId(Selectors.InventoryItemName);
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
  }

  async clickLinkBackToProducts(): Promise<void> {
    await this.linkBackToProducts.first().click();
  }
}
