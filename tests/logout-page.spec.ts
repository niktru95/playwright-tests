import { test, expect } from '@playwright/test';
import { logoutPage } from '../pages/logout_page';

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

