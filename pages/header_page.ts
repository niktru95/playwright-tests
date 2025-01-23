import {type Locator, type Page} from "@playwright/test";

export class headerPage {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly nameLogo: Locator;
    readonly cart: Locator;

    constructor(page: Page) {
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.nameLogo = page.getByText('Swag Labs');
        this.cart = page.getByTestId('shopping-cart-link');
    }
}