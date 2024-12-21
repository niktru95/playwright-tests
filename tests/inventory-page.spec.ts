import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Проверка наличия данных в карточке товара на главной странице', async ({ page }) => {
    await allure.displayName("Проверка наличия данных в карточке на главной странице");

    await allure.step('В карточке товара отображается тайтл', async () => {
        await expect(page
        .getByTestId('inventory-item-name').first())
        .toBeVisible();
    })

    await allure.step('В карточке товара отображается описание', async () => {
        await expect(page
        .getByTestId('inventory-item-desc').first())
        .toBeVisible();
    })

    await allure.step('В карточке товара отображается цена', async () => {
        await expect(page.getByTestId('inventory-item-price').first())
            .toBeVisible();
    })

    await allure.step('В карточке товара отображается кнопка "Добавить в корзину"', async () => {
        await expect(page.getByTestId('add-to-cart-sauce-labs-backpack').first())
        .toBeVisible();
    })
})

test('Переход на страницу товара', async ({ page }) => {
    await allure.displayName("Переход на страницу товара");

    const inventory_page = new inventoryPage(page);

    await allure.step('Клик на тайтл продукта', async () => {
        await inventory_page.click_link_back_to_products();
    })

    await allure.step('Урл должен вести на страницу товара', async () => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
    })

    await allure.step('В карточке товара отображается описание', async () => {
        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();
    })

    await allure.step('В карточке товара отображается цена', async () => {
        await expect(page.getByTestId('inventory-item-price')).toBeVisible();
    })

    await allure.step('В карточке товара отображается кнопка "Добавить в корзину"', async () => {
        await expect(page.getByTestId('add-to-cart')).toBeVisible();
    })
});
