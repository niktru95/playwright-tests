import { test as base } from '@playwright/test';
import { CartPage } from "../pages/cart_page";
import {SidebarPage} from "../pages/sidebar_page";
import {InventoryPage} from "../pages/inventory_page";
import {LoginPage} from "../pages/login_page";


type MyFixtures = {
    cartPageFixture: CartPage;
    sidebarPageFixture: SidebarPage;
    inventoryPageFixture: InventoryPage;
    loginPageFixture: LoginPage;
};

export const test = base.extend<MyFixtures>({
    cartPageFixture: async ({ page }, use) => {
        const cartPageFixture = new CartPage(page);
        await use(cartPageFixture);
    },

    sidebarPageFixture: async ({ page }, use) => {
        const sidebarPageFixture = new SidebarPage(page);
        await use(sidebarPageFixture);
    },

    inventoryPageFixture: async ({ page }, use) => {
        const inventoryPageFixture = new InventoryPage(page);
        await use(inventoryPageFixture);
    },

    loginPageFixture: async ({ page }, use) => {
        const loginPageFixture = new LoginPage(page);
        await use(loginPageFixture);
    },
});
