import { type Locator, type Page } from "@playwright/test";
import {BasePage} from "./base-page";

export class InventoryPage extends BasePage{
    readonly linkBackToProducts: Locator;
    readonly burgerMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.linkBackToProducts = page.getByTestId('inventory-item-name');
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
    }
    
    async clickLinkBackToProducts() {
        await this.linkBackToProducts.first().click();
    }
}