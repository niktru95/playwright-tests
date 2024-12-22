import { type Locator, type Page } from "@playwright/test";

export class inventoryPage {
    readonly page: Page;
    readonly link_back_to_products: Locator;
    readonly burger_menu: Locator;

    constructor(page: Page) {
        this.link_back_to_products = page.getByTestId('inventory-item-name').first();
        this.burger_menu = page.getByRole('button', { name: 'Open Menu' });
    }
    
    async clickLinkBackToProducts() {
        await this.link_back_to_products.click();
    }
}