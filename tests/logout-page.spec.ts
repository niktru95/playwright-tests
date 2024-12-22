import { test, expect } from '@playwright/test';
import { logoutPage } from '../pages/logout_page';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Выход из аккаунта пользователя', async ({page}) => {
    await allure.displayName('Выход из аккаунта пользователя');

    const logout_page = new logoutPage(page);

    await allure.step('Кликнуть на боковое меню', async () => {
        await logout_page.clickBurgerMenu();
    })

    await allure.step('Кликнуть на кнопку Logout', async () => {
        await logout_page.clickLogoutButton();
    })

    await allure.step('Совершен переход на страницу авторизации', async () => {
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.getByTestId('login-button')).toBeVisible();
    })
});

