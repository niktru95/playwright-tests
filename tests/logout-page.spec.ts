import { test } from "../fixtures/fixtures";
import * as allure from "allure-js-commons";

test('Выход из аккаунта пользователя', async ({ logoutPageFixture }) => {

    await allure.step('Кликнуть на боковое меню', async ()=> {
        await logoutPageFixture.clickBurgerMenu();
    });

    await allure.step('Кликнуть на кнопку "Logout"', async ()=> {
        await logoutPageFixture.clickLogoutButton();
    });

    await allure.step('Совершен переход на страницу авторизации', async ()=> {
        await logoutPageFixture.checkURL('/');
        await logoutPageFixture.isVisible('login-button');
    });
});

