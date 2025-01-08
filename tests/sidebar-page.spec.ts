// Тест на кнопку Logout написан в файле logout_page
// Тест на кнопку Reset App State написан не будет (состояние сайта не меняется)

import { test, expect } from '@playwright/test';
import { sidebarPage } from '../pages/sidebar_page';
import * as allure from "allure-js-commons";

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия элементов в боковом меню', async ({page}) => {
    await allure.displayName('Проверка наличия элементов в в боковом меню');

    const sidebar_page = new sidebarPage(page);

    await allure.step('Открыть боковое меню', async () => {
        await sidebar_page.clickBurgerMenu();
    });

    await allure.step('В боковом меню содержится кнопка All items', async () => {
        await expect(page.getByText('All Items')).toBeVisible();
    });

    await allure.step('В боковом меню содержится кнопка About', async () => {
        await expect(page.getByText('About')).toBeVisible();
    });

    await allure.step('В боковом меню содержится кнопка Logout', async () => {
        await expect(page.getByText('Logout')).toBeVisible();
    });

    await allure.step('В боковом меню содержится кнопка Reset App State', async () => {
        await expect(page.getByText('Reset App State')).toBeVisible();
    });
});


test('Клик на кнопку All items ведет на главную страницу', async ({page}) => {
    await allure.displayName('Клик на кнопку All items ведет на главную страницу');

    const sidebar_page = new sidebarPage(page);

    await allure.step('Перейти на страницу товара', async () => {
        await page.goto('/inventory-item.html?id=4');
        await expect(page).toHaveURL('/inventory-item.html?id=4');
    });

    await allure.step('Открыть боковое меню', async () => {
        await sidebar_page.clickBurgerMenu();
    });

    await allure.step('Кликнуть на кнопку All items', async () => {
        await sidebar_page.clickAllItems();
    });

    await allure.step('Открылась главная страница с товарами', async () => {
        await expect(page).toHaveURL('/inventory.html');
    });
});

test('Клик на кнопку About ведет страницу о проекте Sauce Lab', async ({page}) => {
    await allure.displayName('Клик на кнопку About ведет на главную страницу');

    const sidebar_page = new sidebarPage(page);

    await allure.step('Открыть боковое меню', async () => {
        await sidebar_page.clickBurgerMenu();
    });

    await allure.step('Кликнуть на кнопку About', async () => {
        await sidebar_page.clickAboutItem();
    });

    await allure.step('Открылась страница о проекте Sauce Lab', async () => {
        await expect(page).toHaveURL('https://saucelabs.com/');
    });
});
