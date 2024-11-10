import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';
import * as allure from "allure-js-commons";

test.beforeEach('Авторизация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
})

test('Проверка наличия данных в карточке товара', async ({ page }) => {
    await allure.displayName("Проверка наличия данных в карточке");

    await allure.step('В карточке товара отображается описание', async => {
        expect(page
        .getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'))
        .toBeVisible();
    })

    await allure.step('В карточке товара отображается цена', async => {
        expect(page.getByText('$29.99')).toBeVisible();
    })

    await allure.step('В карточке товара отображается кнопка "Добавить в корзину"', async => {
        expect(page.getByRole('button', { name: 'Add to cart' })
        .first())
        .toBeVisible();
    })
})