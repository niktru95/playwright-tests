import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/login_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
  await page.goto('/');
});

test.use({ storageState: { cookies: [], origins: [] } });

test('После авторизации должен быть совершен переход на страницу товаров', async ({ page }) => {
  const saucedemopage = new SauceDemoPage(page);

  await saucedemopage.auth(process.env.LOGIN, process.env.PASSWORD);
  await saucedemopage.click_login_button();

  await expect(page).toHaveURL('/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();
});

test('После ввода некорректного логина должна быть ошибка авторизации', async ({ page }) => {
  const saucedemopage = new SauceDemoPage(page);

  await saucedemopage.auth('incorrect_login', process.env.PASSWORD);
  await saucedemopage.click_login_button();

  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
      .toBeVisible();
});

test('После ввода некорректного пароля должна быть ошибка авторизации', async ({ page }) => {
  const saucedemopage = new SauceDemoPage(page);

  await saucedemopage.auth(process.env.LOGIN, 'incorrect_pass');
  await saucedemopage.click_login_button();

  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
      .toBeVisible();
});

test('После ввода некорректного пароля и логина должна быть ошибка авторизации', async ({ page }) => {
  const saucedemopage = new SauceDemoPage(page);

  await saucedemopage.auth('incorrect_login', 'incorrect_pass');
  await saucedemopage.click_login_button();

  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
      .toBeVisible();
});