import { test, expect } from '@playwright/test';
import { cartPage } from '../pages/cart_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test.describe('Проверка функционала корзины, покупки товара', async () => {

    test('Удаление товара из корзины', async ({ page }) => {
        const cart_page = new cartPage(page);

        await cart_page.clickAddToCartButton();

        await cart_page.clickShopCartLink();

        await expect(page).toHaveURL('/cart.html');

        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        await cart_page.clickRemoveButton();

        await expect(page.getByTestId('inventory-item-name')).toBeHidden();
        await expect(page.getByTestId('inventory-item-price')).toBeHidden();
        await expect(page.getByTestId('inventory-item-desc')).toBeHidden();
    });

    test('Покупка товара', async ({ page }) => {
        const cart_page = new cartPage(page);

        await cart_page.clickAddToCartButton();

        await cart_page.clickShopCartLink();

        await expect(page).toHaveURL('/cart.html');

        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

        await cart_page.clickCheckoutButton();

        await expect(page).toHaveURL('/checkout-step-one.html');

        await cart_page.fillUserInformation(
            process.env.FIRST_NAME,
            process.env.LAST_NAME,
            process.env.ZIPCODE
        );

        await cart_page.clickContinueButton();

        await expect(page).toHaveURL('/checkout-step-two.html');

        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

        await expect(page.getByTestId('payment-info-label')).toBeVisible();
        await expect(page.getByTestId('payment-info-value')).toBeVisible();

        await expect(page.getByTestId('shipping-info-label')).toBeVisible();
        await expect(page.getByTestId('shipping-info-value')).toBeVisible();

        await expect(page.getByTestId('subtotal-label')).toBeVisible();
        await expect(page.getByTestId('tax-label')).toBeVisible();
        await expect(page.getByTestId('total-label')).toBeVisible();

        await cart_page.clickFinishButton();

        await expect(page.getByTestId('complete-header')).toBeVisible();
        await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
        await expect(page.getByTestId('complete-text')).toBeVisible();
        await expect(page.getByTestId('complete-text')).toHaveText(
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
        );

        await cart_page.clickBackToProductsButton();

        await expect(page).toHaveURL('/inventory.html');
    });
});