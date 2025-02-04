import { test } from "../fixtures/fixtures";

test.beforeEach('Переход на страницу, добавление товара в корзину', async ({ cartPageFixture }) => {
    await cartPageFixture.goTo('/inventory.html');
    await cartPageFixture.clickAddToCartButton();
    await cartPageFixture.clickShopCartLink();
    await cartPageFixture.checkQuantity('item-quantity', '1');
});

test.describe('Проверка функционала корзины', () => {

    test('Удаление товара из корзины', async ({ cartPageFixture }) => {
        await cartPageFixture.clickRemoveButton();
        await cartPageFixture.isHidden('inventory-item-name');
        await cartPageFixture.isHidden('inventory-item-price');
        await cartPageFixture.isHidden('inventory-item-desc');
    });

    test('Покупка товара', async ({ cartPageFixture }) => {
        await cartPageFixture.isVisible('inventory-item-name');
        await cartPageFixture.isVisible('inventory-item-desc')
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
        await cartPageFixture.isVisible('inventory-item-name');
        await cartPageFixture.isVisible('inventory-item-desc');
        await cartPageFixture.isVisible('payment-info-label');
        await cartPageFixture.isVisible('payment-info-value');
        await cartPageFixture.isVisible('shipping-info-label');
        await cartPageFixture.isVisible('shipping-info-value');
        await cartPageFixture.isVisible('subtotal-label');
        await cartPageFixture.isVisible('tax-label');
        await cartPageFixture.isVisible('total-label');

        await cartPageFixture.clickFinishButton();

        await cartPageFixture.checkText('complete-header', 'Thank you for your order!');
        await cartPageFixture.checkText('complete-text', 'Your order has been dispatched, ' +
            'and will arrive just as fast as the pony can get there!');

        await cartPageFixture.clickBackToProductsButton();

        await cartPageFixture.checkURL('/inventory.html');
    });
});
