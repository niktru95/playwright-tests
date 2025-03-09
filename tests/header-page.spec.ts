import { test } from "../fixtures/fixtures";
import { expect} from "@playwright/test";
import {Selectors} from "../selectors/selectors";

test('Проверка наличия элементов в хедере', async ({ page, headerPageFixture }) => {

    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    await headerPageFixture.isVisibleGetByText('Swag Labs')
    await headerPageFixture.isVisible(Selectors.ShoppingCartLink);
});