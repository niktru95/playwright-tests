import { test, expect } from '@playwright/test';
import { cartPage } from '../pages/cart_page';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test.describe('Проверка функционала корзины, покупки товара', async () => {

    test('Удаление товара из корзины', async ({ page }) => {
        const cart_page = new cartPage(page);

        // Добавить продукт в корзину
        await cart_page.clickAddToCartButton();

        // Перейти на страницу проверки заказа
        await cart_page.clickShopCartLink();

        // Открывается страница корзины
        await expect(page).toHaveURL('/cart.html');

        // Значение количества товара стало 1
        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        // Кликнуть на кнопку Remove (удалить)
        await cart_page.clickRemoveButton();

        // Товар удален из корзины
        await expect(page.getByTestId('inventory-item-name')).toBeHidden();
        await expect(page.getByTestId('inventory-item-price')).toBeHidden();
        await expect(page.getByTestId('inventory-item-desc')).toBeHidden();
    });

    test('Покупка товара', async ({ page }) => {
        const cart_page = new cartPage(page);

        // Добавить продукт в корзину
        await cart_page.clickAddToCartButton();

        // Перейти на страницу проверки заказа
        await cart_page.clickShopCartLink();

        // Открывается страница корзины
        await expect(page).toHaveURL('/cart.html');

        // Значение количества товара стало 1
        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        // Отображается название выбранного товара
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

        // Отображается описание выбранного товара
        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

        // Кликнуть на кнопку Checkout
        await cart_page.clickCheckoutButton();

        // Открылась страница ввода информации о покупателе
        await expect(page).toHaveURL('/checkout-step-one.html');

        // Ввести данные о пользователе
        await cart_page.fillUserInformation(
            process.env.FIRST_NAME,
            process.env.LAST_NAME,
            process.env.ZIPCODE
        );

        // Кликнуть на кнопку Continue
        await cart_page.clickContinueButton();

        // Открылась страница оформления заказа
        await expect(page).toHaveURL('/checkout-step-two.html');

        // Значение количества товара стало 1
        await expect(page.getByTestId('item-quantity')).toHaveText('1');

        // Отображается название выбранного товара
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

        // Отображается описание выбранного товара
        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();

        // Отображаются данные метода оплаты
        await expect(page.getByTestId('payment-info-label')).toBeVisible();
        await expect(page.getByTestId('payment-info-value')).toBeVisible();

        // Отображаются данные метода доставки
        await expect(page.getByTestId('shipping-info-label')).toBeVisible();
        await expect(page.getByTestId('shipping-info-value')).toBeVisible();

        // Отображается блок с итоговой ценой
        await expect(page.getByTestId('subtotal-label')).toBeVisible();
        await expect(page.getByTestId('tax-label')).toBeVisible();
        await expect(page.getByTestId('total-label')).toBeVisible();

        // Кликнуть на кнопку Finish
        await cart_page.clickFinishButton();

        // Отображается сообщение об успешном оформлении заказа
        await expect(page.getByTestId('complete-header')).toBeVisible();
        await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
        await expect(page.getByTestId('complete-text')).toBeVisible();
        await expect(page.getByTestId('complete-text')).toHaveText(
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
        );

        // Кликнуть на кнопку Back Home
        await cart_page.clickBackToProductsButton();

        // Открывается главная страница
        await expect(page).toHaveURL('/inventory.html');
    });
});