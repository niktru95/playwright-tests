import { test } from "../fixtures/fixtures";
import {InventorySelectorsArray} from "../selectors/selectors";
import * as allure from "allure-js-commons";

test.describe('Проверки на главной странице', () => {

    test('Проверка наличия данных в карточке товара на главной странице', async ({ inventoryPageFixture }) => {

        await allure.step('Отображаются данные товара', async ()=> {
            await inventoryPageFixture.checkVisibilityOfElementsFirst(InventorySelectorsArray);
        });
    });

    test('Переход на страницу товара', async ({ inventoryPageFixture }) => {

        await allure.step('Кликнуть на карточку товара', async ()=> {
            await inventoryPageFixture.clickLinkBackToProducts();
        });

        await allure.step('Совершен переход на страницу товаров', async ()=> {
            await inventoryPageFixture.checkURL('/inventory-item.html?id=4');
        });
    });
});