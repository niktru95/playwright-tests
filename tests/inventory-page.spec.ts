import { test } from "../fixtures/fixtures";
import {Selectors} from "../selectors/selectors";
test.describe('Проверки на главной странице', () => {

    test('Проверка наличия данных в карточке товара на главной странице', async ({ inventoryPageFixture }) => {

        await inventoryPageFixture.isVisibleFirst(Selectors.InventoryItemName);
        await inventoryPageFixture.isVisibleFirst(Selectors.InventoryItemDesc);
        await inventoryPageFixture.isVisibleFirst(Selectors.InventoryItemPrice);
        await inventoryPageFixture.isVisibleFirst(Selectors.AddToCartItem);
    });

    test('Переход на страницу товара', async ({ inventoryPageFixture }) => {

        await inventoryPageFixture.clickLinkBackToProducts();
        await inventoryPageFixture.checkURL('/inventory-item.html?id=4');
        await inventoryPageFixture.isVisible(Selectors.InventoryItemDesc);
        await inventoryPageFixture.isVisible(Selectors.InventoryItemPrice);
        await inventoryPageFixture.isVisible(Selectors.AddToCartApprove);
    });
});