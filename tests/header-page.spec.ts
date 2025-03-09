import { test } from "../fixtures/fixtures";
import { expect} from "@playwright/test";
import {Selectors} from "../selectors/selectors";
import * as allure from "allure-js-commons";

test('Проверка наличия элементов в хедере', async ({ page, headerPageFixture }) => {

    await allure.step('В хедере отображается название сайта, боковое меню, ссылка на корзину', async ()=> {
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
        await headerPageFixture.isVisibleGetByText('Swag Labs');
        await headerPageFixture.isVisible(Selectors.ShoppingCartLink);
    });
});