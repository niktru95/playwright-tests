import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Проверка наличия элементов в хедере', async ({page}) => {
    await allure.displayName('Проверка наличия элементов в хедере');

    await allure.step('Отображается бургер-меню', async () => {
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    });

    await allure.step('Отображается название сайта', async () => {
        await expect(page.getByText('Swag Labs')).toBeVisible();
    });

    await allure.step('Отображается кнопка корзины', async () => {
        await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
    });
});