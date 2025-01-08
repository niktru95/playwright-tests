import { test, expect } from '@playwright/test';
import { logoutPage } from '../pages/logout_page';
import * as allure from "allure-js-commons";

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
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
        await expect(page).toHaveURL('/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await expect(page.getByTestId('login-button')).toBeVisible();
    })
});

