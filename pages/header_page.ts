import {type Locator, type Page} from "@playwright/test";

export class headerPage {
    readonly page: Page;
    readonly burger_menu: Locator;
    readonly name_logo: Locator;
    readonly cart: Locator;

    constructor(page: Page) {
        this.burger_menu = page.getByRole('button', { name: 'Open Menu' });
        this.name_logo = page.getByText('Swag Labs');
        this.cart = page.getByTestId('shopping-cart-link');
    }
}