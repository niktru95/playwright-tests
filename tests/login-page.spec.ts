import {test} from "../fixtures/fixtures";
import {performLogin, checkIncorrectLogin} from "../const/consts";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Проверка авторизации', () => {

  test('После авторизации должен быть совершен переход на страницу товаров', async ({ loginPageFixture }) => {
    await performLogin(loginPageFixture, process.env.LOGIN, process.env.PASSWORD);

    await test.step('Произошел переход на главную страницу', async () => {
      await loginPageFixture.checkURL('/inventory.html');
    });
  });

  test('После ввода некорректного логина должна быть ошибка авторизации', async ({ loginPageFixture }) => {
    await performLogin(loginPageFixture, 'incorrect_login', process.env.PASSWORD);
    await checkIncorrectLogin(loginPageFixture);
  });

  test('После ввода некорректного пароля должна быть ошибка авторизации', async ({ loginPageFixture }) => {
    await performLogin(loginPageFixture, process.env.LOGIN, 'incorrect_pass');
    await checkIncorrectLogin(loginPageFixture);
  });

  test('После ввода некорректного пароля и логина должна быть ошибка авторизации', async ({ loginPageFixture }) => {
    await performLogin(loginPageFixture, 'incorrect_login', 'incorrect_pass');
    await checkIncorrectLogin(loginPageFixture);
  });
});