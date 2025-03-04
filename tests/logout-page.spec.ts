import { test } from "../fixtures/fixtures";

test('Выход из аккаунта пользователя', async ({ logoutPageFixture }) => {

    await logoutPageFixture.clickBurgerMenu();
    await logoutPageFixture.clickLogoutButton();
    await logoutPageFixture.checkURL('/');

    await logoutPageFixture.isVisibleGetByText('Swag Labs');
    await logoutPageFixture.isVisible('login-button');
});

