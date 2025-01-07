import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto(process.env.LOGIN_PAGE);
    await page.getByPlaceholder('Username').fill(process.env.LOGIN);
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL(process.env.INVENTORY_PAGE);
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