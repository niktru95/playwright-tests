import { test } from "../fixtures/fixtures";
import { CartWarnings} from '../enum/enum'
import {Selectors, CartSelectorsArray, InventorySelectorsArray} from "../selectors/selectors";
import * as allure from "allure-js-commons";

test.describe('Проверка функционала корзины', () => {

    test('Удаление товара из корзины', async ({ cartPageFixture }) => {

        await allure.step('Кликнуть на кнопку "Удалить"', async () => {
            await cartPageFixture.clickRemoveButton();
        });

        await allure.step('Товар удален из корзины', async () => {
            await cartPageFixture.checkHiddenElements(InventorySelectorsArray, [0, 1, 3]);
        });
    });

    test('Покупка товара', async ({ cartPageFixture }) => {

        await allure.step('Кликнуть на кнопку "Checkout"', async () => {
            await cartPageFixture.clickCheckoutButton();
        });

        await allure.step('Совершен переход на страницу проверки заказа', async () => {
            await cartPageFixture.checkURL('/checkout-step-one.html');
        });

        await allure.step('Заполнить информацию о пользователе', async () => {
            await cartPageFixture.fillUserInformation(
                process.env.FIRST_NAME,
                process.env.LAST_NAME,
                process.env.ZIPCODE
            );
        });

        await allure.step('Кликнуть на кнопку "Continue"', async () => {
            await cartPageFixture.clickContinueButton();
        });

        await allure.step('Совершен на страницу подтверждения заказа', async () => {
            await cartPageFixture.checkURL('/checkout-step-two.html');
            await cartPageFixture.checkText(Selectors.ItemQuantity, '1');
            await cartPageFixture.checkVisibilityOfElements(CartSelectorsArray);
        });

        await allure.step('Кликнуть на кнопку "Finish"', async () => {
            await cartPageFixture.clickFinishButton();
        });

        await allure.step('Появилось сообщение о подтверждения заказа', async () => {
            await cartPageFixture.checkText(Selectors.TextHeader, CartWarnings.CompleteHeaderText);
            await cartPageFixture.checkText(Selectors.TextComplete, CartWarnings.CompleteOrderText);
        });

        await allure.step('Кликнуть на кнопку "Back to Products"', async () => {
            await cartPageFixture.clickBackToProductsButton();
        });

        await allure.step('Совершен переход на главную страницу', async () => {
            await cartPageFixture.checkURL('/inventory.html');
        });
    });
});
