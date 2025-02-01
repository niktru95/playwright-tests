// Тест на кнопку Logout написан в файле logout_page
// Тест на кнопку Reset App State написан не будет (состояние сайта не меняется)

import { test, expect } from '@playwright/test';
import { logoutPage } from '../pages/logout_page';
import { sidebarPage } from '../pages/sidebar_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Выход из аккаунта пользователя', async ({ page }) => {
    const logout_page = new logoutPage(page);

    await logout_page.clickBurgerMenu();
    await logout_page.clickLogoutButton();

    await expect(page).toHaveURL('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByTestId('login-button')).toBeVisible();
});

test('Проверка наличия элементов в боковом меню', async ({ page }) => {
    const sidebar_page = new sidebarPage(page);

    await sidebar_page.clickBurgerMenu();
    await expect(page.getByText('All Items')).toBeVisible();
    await expect(page.getByText('About')).toBeVisible();
    await expect(page.getByText('Logout')).toBeVisible();
    await expect(page.getByText('Reset App State')).toBeVisible();
});

test('Клик на кнопку All items ведет на главную страницу', async ({ page }) => {
    const sidebar_page = new sidebarPage(page);

    await page.goto('/inventory-item.html?id=4');
    await expect(page).toHaveURL('/inventory-item.html?id=4');

    await sidebar_page.clickBurgerMenu();
    await sidebar_page.clickAllItems();

    await expect(page).toHaveURL('/inventory.html');
});

test('Клик на кнопку About ведет на страницу о проекте Sauce Lab', async ({ page }) => {
    const sidebar_page = new sidebarPage(page);

    await sidebar_page.clickBurgerMenu();
    await sidebar_page.clickAboutItem();

    await expect(page).toHaveURL('https://saucelabs.com/');
});
