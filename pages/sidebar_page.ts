import { Locator, type Page } from "@playwright/test";

export class sidebarPage {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly allItemsItem: Locator;
    readonly aboutItem: Locator;

    constructor(page: Page) {
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.allItemsItem = page.getByText('All Items');
        this.aboutItem = page.getByText('About');
    };

    async clickBurgerMenu () {
        await this.burgerMenu.click();
    };

    async clickAllItems () {
        await this.allItemsItem.click();
    };

    async clickAboutItem () {
        await this.aboutItem.click();
    }
}