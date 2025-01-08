import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';
import * as allure from "allure-js-commons";

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
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
        await inventory_page.clickLinkBackToProducts();
    })

    await allure.step('Урл должен вести на страницу товара', async () => {
        await expect(page).toHaveURL('/inventory-item.html?id=4');
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
