import { Locator, type Page } from "@playwright/test";

export class sidebarPage {
    readonly page: Page;
    readonly burger_menu: Locator;
    readonly all_items_item: Locator;
    readonly about_item: Locator;

    constructor(page: Page) {
        this.burger_menu = page.getByRole('button', { name: 'Open Menu' });
        this.all_items_item = page.getByText('All Items');
        this.about_item = page.getByText('About');
    };

    async clickBurgerMenu () {
        await this.burger_menu.click();
    };

    async clickAllItems () {
        await this.all_items_item.click();
    };

    async clickAboutItem () {
        await this.about_item.click();
    }
}