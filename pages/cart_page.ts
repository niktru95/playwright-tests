import { Locator, type Page } from "@playwright/test";

export class cartPage {
    readonly page: Page;
    readonly add_to_cart_button: Locator;
    readonly shop_cart_link: Locator;
    readonly remove_button: Locator;

    constructor(page: Page) {
        this.add_to_cart_button = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.shop_cart_link = page.getByTestId('shopping-cart-link');
        this.remove_button = page.getByTestId('remove-sauce-labs-backpack');
    }

    async clickAddToCartButton() {
        await this.add_to_cart_button.click();
    }
    async clickShopCartLink () {
        await this.shop_cart_link.click();
    }
    async clickRemoveButton () {
        await this.remove_button.click();
    }
}