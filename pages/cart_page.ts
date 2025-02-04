import { Locator, type Page } from "@playwright/test";
import {BasePage} from "./base-page";

export class CartPage extends BasePage{
    readonly addToCartButton: Locator;
    readonly shopCartLink: Locator;
    readonly removeButton: Locator;
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipcode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly backToProductsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.shopCartLink = page.getByTestId('shopping-cart-link');
        this.removeButton = page.getByTestId('remove-sauce-labs-backpack');
        this.checkoutButton = page.getByTestId('checkout');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.zipcode = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByTestId('continue');
        this.finishButton = page.getByTestId('finish');
        this.backToProductsButton = page.getByTestId('back-to-products');
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    };

    async clickShopCartLink () {
        await this.shopCartLink.click();
    };

    async clickRemoveButton () {
        await this.removeButton.click();
    };

    async clickCheckoutButton () {
        await this.checkoutButton.click();
    };

    async fillUserInformation (first_name: string, last_name: string, zipcode: string) {
        await this.firstName.fill(first_name);
        await this.lastName.fill(last_name);
        await this.zipcode.fill(zipcode);
    };

    async clickContinueButton () {
        await this.continueButton.click();
    };

    async clickFinishButton () {
        await this.finishButton.click();
    };

    async clickBackToProductsButton () {
        await this.backToProductsButton.click();
    };
}