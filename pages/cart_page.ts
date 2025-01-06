import { Locator, type Page } from "@playwright/test";

export class cartPage {
    readonly page: Page;
    readonly add_to_cart_button: Locator;
    readonly shop_cart_link: Locator;
    readonly remove_button: Locator;
    readonly checkout_button: Locator;
    readonly first_name: Locator;
    readonly last_name: Locator;
    readonly zipcode: Locator;
    readonly continue_button: Locator;
    readonly finish_button: Locator;
    readonly back_to_products_button: Locator;

    constructor(page: Page) {
        this.add_to_cart_button = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.shop_cart_link = page.getByTestId('shopping-cart-link');
        this.remove_button = page.getByTestId('remove-sauce-labs-backpack');
        this.checkout_button = page.getByTestId('checkout');
        this.first_name = page.getByPlaceholder('First Name');
        this.last_name = page.getByPlaceholder('Last Name');
        this.zipcode = page.getByPlaceholder('Zip/Postal Code');
        this.continue_button = page.getByTestId('continue');
        this.finish_button = page.getByTestId('finish');
        this.back_to_products_button = page.getByTestId('back-to-products');
    }

    async clickAddToCartButton() {
        await this.add_to_cart_button.click();
    };

    async clickShopCartLink () {
        await this.shop_cart_link.click();
    };

    async clickRemoveButton () {
        await this.remove_button.click();
    };

    async clickCheckoutButton () {
        await this.checkout_button.click();
    };

    async fillUserInformation (first_name: string, last_name: string, zipcode: string) {
        await this.first_name.fill(first_name);
        await this.last_name.fill(last_name);
        await this.zipcode.fill(zipcode);
    };

    async clickContinueButton () {
        await this.continue_button.click();
    };

    async clickFinishButton () {
        await this.finish_button.click();
    };

    async clickBackToProductsButton () {
        await this.back_to_products_button.click();
    };
}