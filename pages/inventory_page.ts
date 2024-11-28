import { type Locator, type Page } from "@playwright/test";

export class inventoryPage {
    readonly page: Page;
    // readonly product_sort: Locator;
    // readonly product_name: Locator;
    readonly link_back_to_products: Locator;

    constructor(page: Page) {
        // this.product_name = page.getByText('Sauce Labs Backpack');
        this.link_back_to_products = page.locator('[data-test="item-4-title-link"]');
    }

    // async click_link_product() {
    //     await this.product_name.click();
    // }
    
    async click_link_back_to_products() {
        await this.link_back_to_products.click();
    }
}