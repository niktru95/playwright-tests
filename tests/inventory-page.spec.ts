import { test } from "../fixtures/fixtures";

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия данных в карточке товара на главной странице', async ({ inventoryPageFixture }) => {

    await inventoryPageFixture.isVisibleFirst('inventory-item-name');
    await inventoryPageFixture.isVisibleFirst('inventory-item-desc');
    await inventoryPageFixture.isVisibleFirst('inventory-item-price');
    await inventoryPageFixture.isVisibleFirst('add-to-cart-sauce-labs-backpack');
});

test('Переход на страницу товара', async ({ inventoryPageFixture }) => {

    await inventoryPageFixture.clickLinkBackToProducts();
    await inventoryPageFixture.checkURL('/inventory-item.html?id=4');
    await inventoryPageFixture.isVisible('inventory-item-desc');
    await inventoryPageFixture.isVisible('inventory-item-price');
    await inventoryPageFixture.isVisible('add-to-cart');
});