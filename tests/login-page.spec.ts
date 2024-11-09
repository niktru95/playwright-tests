import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/login_page';
import * as allure from "allure-js-commons";

test('После авторизации должен быть совершен переход на страницу товаров', async ({ page }) => {
  const playwrightDev = new SauceDemoPage(page);

  await allure.tags('Проверка авторизации');

  await allure.step('Перейти на страницу проекта', async () => {
    await playwrightDev.goto();
  })

  await allure.step('Ввести данные пользователя', async () => {
    await playwrightDev.auth('standard_user', 'secret_sauce');
  })

  await allure.step('Кликнуть на кнопку авторизации', async () => {
    await playwrightDev.loginButton();
  })

  await allure.step('Открылась страница товаров с тайтлом Products', async () => {
    await expect(page.getByText('Products')).toBeVisible();
  })
});