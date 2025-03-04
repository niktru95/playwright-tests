import { test as base } from '@playwright/test';
import { CartPage } from "../pages/cart_page";
import {SidebarPage} from "../pages/sidebar_page";
import {InventoryPage} from "../pages/inventory_page";
import {LoginPage} from "../pages/login_page";
import {HeaderPage} from "../pages/header_page";
import {FooterPage} from "../pages/footer_page";
import {LogoutPage} from "../pages/logout_page";


type MyFixtures = {
    cartPageFixture: CartPage;
    sidebarPageFixture: SidebarPage;
    inventoryPageFixture: InventoryPage;
    loginPageFixture: LoginPage;
    headerPageFixture: HeaderPage;
    footerPageFixture: FooterPage;
    logoutPageFixture: LogoutPage;
};

export const test = base.extend<MyFixtures>({
    cartPageFixture: async ({ page }, use) => {
        const cartPageFixture = new CartPage(page);
        await cartPageFixture.goTo('/inventory.html');
        await cartPageFixture.clickAddToCartButton();
        await cartPageFixture.clickShopCartLink();
        await cartPageFixture.checkText('item-quantity', '1');
        await cartPageFixture.isVisible('inventory-item-name');
        await cartPageFixture.isVisible('inventory-item-desc');
        await use(cartPageFixture);
    },

    sidebarPageFixture: async ({ page }, use) => {
        const sidebarPageFixture = new SidebarPage(page);
        await page.goto('/');
        await use(sidebarPageFixture);
    },

    inventoryPageFixture: async ({ page }, use) => {
        const inventoryPageFixture = new InventoryPage(page);
        await page.goto('/inventory.html');
        await use(inventoryPageFixture);
    },

    loginPageFixture: async ({ page }, use) => {
        const loginPageFixture = new LoginPage(page);
        await page.goto('/');
        await use(loginPageFixture);
    },

    headerPageFixture: async ({ page }, use) => {
        const headerPageFixture = new HeaderPage(page);
        await page.goto('/');
        await use(headerPageFixture);
    },

    footerPageFixture: async ({ page }, use) => {
        const footerPageFixture = new FooterPage(page);
        await footerPageFixture.goTo('/inventory.html');
        await use(footerPageFixture);
    },

    logoutPageFixture: async ({ page }, use) => {
        const logoutPageFixture = new LogoutPage(page);
        await logoutPageFixture.goTo('/inventory.html');
        await use(logoutPageFixture);
    },
});
