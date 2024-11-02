import { type Locator, type Page } from "@playwright/test";

export class inventoryPage {
    readonly page: Page;
    readonly product_sort: Locator;
    readonly product_name: Locator;

    constructor(page: Page) {
        this.product_name = page.getByText('Sauce Labs Backpack');
    }

    async click_link_product() {
        await this.product_name.click();
    }
}