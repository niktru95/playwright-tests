import { test } from "../fixtures/fixtures";
import { CartWarnings, Selectors } from '../enum/enum'
import { CartSelectorsArray } from "../selectors/selectors";

test.describe('Проверка функционала корзины', () => {

    test('Удаление товара из корзины', async ({ cartPageFixture }) => {

        await cartPageFixture.clickRemoveButton();
        await cartPageFixture.isHidden(Selectors.InventoryItemName);
        await cartPageFixture.isHidden(Selectors.InventoryItemPrice);
        await cartPageFixture.isHidden(Selectors.InventoryItemDesc);
    });

    test('Покупка товара', async ({ cartPageFixture }) => {

        await cartPageFixture.clickCheckoutButton();
        await cartPageFixture.checkURL('/checkout-step-one.html');
        await cartPageFixture.fillUserInformation(
            process.env.FIRST_NAME,
            process.env.LAST_NAME,
            process.env.ZIPCODE
        );

        await cartPageFixture.clickContinueButton();
        await cartPageFixture.checkURL('/checkout-step-two.html');
        await cartPageFixture.checkText(Selectors.ItemQuantity, '1');
        await cartPageFixture.checkVisibilityOfElements(CartSelectorsArray);

        await cartPageFixture.clickFinishButton();
        await cartPageFixture.checkText(Selectors.TextHeader, CartWarnings.CompleteHeaderText);
        await cartPageFixture.checkText(Selectors.TextComplete, CartWarnings.CompleteOrderText);

        await cartPageFixture.clickBackToProductsButton();
        await cartPageFixture.checkURL('/inventory.html');
    });
});
