import { Locator, type Page } from "@playwright/test";
import {BasePage} from "./base-page";

export class SidebarPage extends BasePage{
    readonly burgerMenu: Locator;
    readonly allItemsItem: Locator;
    readonly aboutItem: Locator;

    constructor(page: Page) {
        super(page);
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.allItemsItem = page.getByText('All Items');
        this.aboutItem = page.getByTestId('about-sidebar-link');
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