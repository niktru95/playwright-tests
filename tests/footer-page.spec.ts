import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test.beforeEach('Переход на страницу проекта', async ({page}) => {
    await page.goto(process.env.INVENTORY_PAGE);
})

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
        await expect(page.getByTestId('footer-copy')).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
})