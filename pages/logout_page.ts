import {Locator, type Page} from "@playwright/test";


export class logoutPage {
    readonly page: Page;
    readonly burger: Locator;
    readonly logout_button: Locator;

    constructor(page: Page) {
        this.burger = page.getByRole('button', { name: 'Open Menu' });
        this.logout_button = page.getByTestId('logout-sidebar-link');
    }

    async click_burger_menu () {
        await this.burger.click();
    }

    async click_logout_button () {
        await this.logout_button.click();
    }
}