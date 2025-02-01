import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия данных в карточке товара на главной странице', async ({ page }) => {
    await expect(page.getByTestId('inventory-item-name').first()).toBeVisible();

    await expect(page.getByTestId('inventory-item-desc').first()).toBeVisible();

    await expect(page.getByTestId('inventory-item-price').first()).toBeVisible();

    await expect(page.getByTestId('add-to-cart-sauce-labs-backpack').first()).toBeVisible();
});

test('Переход на страницу товара', async ({ page }) => {
    const inventory_page = new inventoryPage(page);

    await inventory_page.clickLinkBackToProducts();

    await expect(page).toHaveURL('/inventory-item.html?id=4');

    await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

    await expect(page.getByTestId('inventory-item-price')).toBeVisible();

    await expect(page.getByTestId('add-to-cart')).toBeVisible();
});