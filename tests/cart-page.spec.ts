import { test } from '../fixtures/fixtures';
import { InventorySelectorsArray, Selectors } from '../selectors/selectors';

test.describe('Проверка функционала корзины', () => {
  test('Удаление товара из корзины', async ({ cartPageFixture }) => {
    await test.step('Кликнуть на кнопку "Удалить"', async () => {
      await cartPageFixture.clickElement(Selectors.RemoveSauceLabsBackpack);
    });

    await test.step('Товар удален из корзины', async () => {
      await cartPageFixture.checkHiddenElements(InventorySelectorsArray, [0, 1, 3]);
    });
  });

  test('Покупка товара', async ({ cartPageFixture }) => {
    await test.step('Кликнуть на кнопку "Checkout"', async () => {
      await cartPageFixture.clickElement(Selectors.CheckoutButton);
    });

    await test.step('Совершен переход на страницу проверки заказа', async () => {
      await cartPageFixture.checkURL('/checkout-step-one.html');
    });

    await test.step('Заполнить информацию о пользователе', async () => {
      await cartPageFixture.fillUserInformation();
    });

    await test.step('Кликнуть на кнопку "Continue"', async () => {
      await cartPageFixture.clickElement(Selectors.ContinueButton);
    });

    await test.step('Совершен на страницу подтверждения заказа', async () => {
      await cartPageFixture.checkApprovedOrder();
    });

    await test.step('Кликнуть на кнопку "Finish"', async () => {
      await cartPageFixture.clickElement(Selectors.FinishButton);
    });

    await test.step('Появилось сообщение о подтверждении заказа', async () => {
      await cartPageFixture.checkApproveText();
    });

    await test.step('Кликнуть на кнопку "Back to Products"', async () => {
      await cartPageFixture.clickElement(Selectors.BackToProductsButton);
    });

    await test.step('Совершен переход на главную страницу', async () => {
      await cartPageFixture.checkURL('/inventory.html');
    });
  });
});
