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

test('Проверка наличия элементов в футере', async ({page}) => {
    await allure.displayName('Проверка наличия элементов в футере');

    await allure.step('Отображается кнопка перехода в Twitter', async () => {
        await expect(page.getByTestId('social-twitter')).toBeVisible();
    });

    await allure.step('Отображается кнопка перехода в Facebook', async () => {
        await expect(page.getByTestId('social-facebook')).toBeVisible();
    });

    await allure.step('Отображается кнопка перехода в LinkedIn', async () => {
        await expect(page.getByTestId('social-linkedin')).toBeVisible();
    });

    await allure.step('Отображается копирайт', async () => {
        await expect(page.getByTestId('footer-copy')).toBeVisible();
        await expect(page.getByTestId('footer-copy')).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
})