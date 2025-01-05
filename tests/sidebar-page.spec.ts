import { test, expect } from '@playwright/test';
// import { sidebarPage } from '../pages/sidebar_page';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Проверка наличия элементов в боковом меню', async ({page}) => {
    await allure.displayName('Проверка наличия элементов в в боковом меню');

    await allure.step('В боковом меню содержится кнопка All items', async () => {
        await expect(page.getByText('All Items')).toBeVisible();
    })

    await allure.step('В боковом меню содержится кнопка About', async () => {
        await expect(page.getByText('About')).toBeVisible();
    })

    await allure.step('В боковом меню содержится кнопка Logout', async () => {
        await expect(page.getByText('Logout')).toBeVisible();
    })

    await allure.step('В боковом меню содержится кнопка Reset App State', async () => {
        await expect(page.getByText('Reset App State')).toBeVisible();
    })
})
