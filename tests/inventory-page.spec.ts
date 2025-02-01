import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия данных в карточке товара на главной странице', async ({ page }) => {
    // В карточке товара отображается тайтл
    await expect(page.getByTestId('inventory-item-name').first()).toBeVisible();

    // В карточке товара отображается описание
    await expect(page.getByTestId('inventory-item-desc').first()).toBeVisible();

    // В карточке товара отображается цена
    await expect(page.getByTestId('inventory-item-price').first()).toBeVisible();

    // В карточке товара отображается кнопка "Добавить в корзину"
    await expect(page.getByTestId('add-to-cart-sauce-labs-backpack').first()).toBeVisible();
});

test('Переход на страницу товара', async ({ page }) => {
    const inventory_page = new inventoryPage(page);

    // Клик на тайтл продукта
    await inventory_page.clickLinkBackToProducts();

    // Урл должен вести на страницу товара
    await expect(page).toHaveURL('/inventory-item.html?id=4');

    // В карточке товара отображается описание
    await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

    // В карточке товара отображается цена
    await expect(page.getByTestId('inventory-item-price')).toBeVisible();

    // В карточке товара отображается кнопка "Добавить в корзину"
    await expect(page.getByTestId('add-to-cart')).toBeVisible();
});