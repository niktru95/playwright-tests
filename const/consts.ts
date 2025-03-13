import {test} from "../fixtures/fixtures";

export const  performLogin = async (loginPageFixture, login: string, password: string) => {
    await test.step('Ввести креды пользователя', async () => {
        await loginPageFixture.auth(login, password);
    });

    await test.step('Кликнуть на кнопку авторизации', async () => {
        await loginPageFixture.clickLoginButton();
    });
};

export const checkIncorrectLogin = async (loginPageFixture) => {
    await test.step('Появилась ошибка "Данные пользователя неверны"', async () => {
        await loginPageFixture.incorrectLoginPassNotify();
    });
};