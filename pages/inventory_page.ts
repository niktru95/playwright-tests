import { type Locator, type Page } from "@playwright/test";

export class inventoryPage {
    readonly page: Page;
    readonly linkBackToProducts: Locator;
    readonly burgerMenu: Locator;

    constructor(page: Page) {
        this.linkBackToProducts = page.getByTestId('inventory-item-name');
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
    }
    
    async clickLinkBackToProducts() {
        await this.linkBackToProducts.first().click();
    }
}