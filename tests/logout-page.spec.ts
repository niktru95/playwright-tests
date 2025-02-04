import { test } from '@playwright/test';
import { LogoutPage } from '../pages/logout_page';

test('Выход из аккаунта пользователя', async ({ page }) => {
    const logoutPage = new LogoutPage(page);

    await logoutPage.goTo('/inventory.html');
    await logoutPage.clickBurgerMenu();
    await logoutPage.clickLogoutButton();
    await logoutPage.checkURL('/');

    await logoutPage.isVisibleGetByText('Swag Labs');
    await logoutPage.isVisible('login-button');
});

