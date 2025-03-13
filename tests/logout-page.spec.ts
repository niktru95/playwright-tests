import { test } from "../fixtures/fixtures";

test.describe('Проверка логаута', ()=> {

    test('Выход из аккаунта пользователя', async ({ logoutPageFixture }) => {

        await test.step('Кликнуть на боковое меню', async ()=> {
            await logoutPageFixture.clickBurgerMenu();
        });

        await test.step('Кликнуть на кнопку "Logout"', async ()=> {
            await logoutPageFixture.clickLogoutButton();
        });

        await test.step('Совершен переход на страницу авторизации', async ()=> {
            await logoutPageFixture.checkURL('/');
            await logoutPageFixture.isVisible('login-button');
        });
    });

});

