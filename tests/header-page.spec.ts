import { test, expect } from '@playwright/test';
import {HeaderPage} from "../pages/header_page";

test('Проверка наличия элементов в хедере', async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.goTo('/inventory.html');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    await headerPage.isVisibleGetByText('Swag Labs')
    await headerPage.isVisible('shopping-cart-link');
});