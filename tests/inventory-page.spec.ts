import { test } from '../fixtures/fixtures';
import { InventorySelectorsArray } from '../selectors/selectors';

test.describe('Проверки на главной странице', () => {
  test('Проверка наличия данных в карточке товара на главной странице', async ({
    inventoryPageFixture,
  }) => {
    await test.step('Отображаются данные товара', async () => {
      await inventoryPageFixture.checkVisibilityOfElementsFirst(InventorySelectorsArray);
    });
  });

  test('Переход на страницу товара', async ({ inventoryPageFixture }) => {
    await test.step('Кликнуть на карточку товара', async () => {
      await inventoryPageFixture.clickLinkBackToProducts();
    });

    await test.step('Совершен переход на страницу товаров', async () => {
      await inventoryPageFixture.checkURL('/inventory-item.html?id=4');
    });
  });
});
