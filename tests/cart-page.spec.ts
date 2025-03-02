import { test } from "../fixtures/fixtures";
import { CartWarnings } from '../enum/enum'
import { CartSelectorsArray } from "../selectors/selectors";

test.describe('Проверка функционала корзины', () => {

    test('Удаление товара из корзины', async ({ cartPageFixture }) => {

        await cartPageFixture.clickRemoveButton();
        await cartPageFixture.isHidden('inventory-item-name');
        await cartPageFixture.isHidden('inventory-item-price');
        await cartPageFixture.isHidden('inventory-item-desc');
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
        await cartPageFixture.checkText('item-quantity', '1');
        await cartPageFixture.checkVisibilityOfElements(CartSelectorsArray);

        await cartPageFixture.clickFinishButton();
        await cartPageFixture.checkText('complete-header', CartWarnings.completeHeaderText);
        await cartPageFixture.checkText('complete-text', CartWarnings.completeOrderText);

        await cartPageFixture.clickBackToProductsButton();
        await cartPageFixture.checkURL('/inventory.html');
    });
});
