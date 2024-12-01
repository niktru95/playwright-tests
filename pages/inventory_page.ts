import { type Locator, type Page } from "@playwright/test";

export class inventoryPage {
    readonly page: Page;
    readonly link_back_to_products: Locator;

    constructor(page: Page) {
        this.link_back_to_products = page.locator('[data-test="item-4-title-link"]');
    }
    
    async click_link_back_to_products() {
        await this.link_back_to_products.click();
    }
}