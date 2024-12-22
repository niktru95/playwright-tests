import {Locator, type Page} from "@playwright/test";

export class logoutPage {
    readonly page: Page;
    readonly burger: Locator;
    readonly logout_button: Locator;

    constructor(page: Page) {
        this.burger = page.getByRole('button', { name: 'Open Menu' });
        this.logout_button = page.getByTestId('logout-sidebar-link');
    }

    async clickBurgerMenu () {
        await this.burger.click();
    }

    async clickLogoutButton () {
        await this.logout_button.click();
    }
}