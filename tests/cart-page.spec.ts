import { test, expect } from '@playwright/test';
import { cartPage } from '../pages/cart_page';
import * as allure from "allure-js-commons";

test.beforeEach('Переход на страницу проекта', async ({page}) => {
    await page.goto(process.env.INVENTORY_PAGE);
})

test('Удаление товара из корзины', async ({page}) => {
    await allure.displayName('Удаление товара из корзины');

    const cart_page = new cartPage(page);

    await allure.step('Добавить продукт в корзину', async () => {
        await cart_page.clickAddToCartButton();
    })

    await allure.step('Перейти на страницу проверки заказа', async () => {
        await cart_page.clickShopCartLink();
    })

    await allure.step('Открывается страница корзины', async () => {
        await expect(page).toHaveURL(process.env.CART_PAGE);
    })

    await allure.step('Значение количества товара стало 1', async () => {
        await expect(page.getByTestId('item-quantity')).toHaveText('1');
    })

    await allure.step('Кликнуть на кнопку Remove (удалить)', async () => {
        await cart_page.clickRemoveButton();
    })

    await allure.step('Товар удален из корзины', async () => {
        await expect(page.getByTestId('inventory-item-name')).toBeHidden();
        await expect(page.getByTestId('inventory-item-price')).toBeHidden();
        await expect(page.getByTestId('inventory-item-desc')).toBeHidden();
    })
});

test('Покупка товара', async ({page}) => {
    await allure.displayName('Покупка товара');

    const cart_page = new cartPage(page);

    await allure.step('Добавить продукт в корзину', async () => {
        await cart_page.clickAddToCartButton();
    });

    await allure.step('Перейти на страницу проверки заказа', async () => {
        await cart_page.clickShopCartLink();
    });

    await allure.step('Открывается страница корзины', async () => {
        await expect(page).toHaveURL(process.env.CART_PAGE);
    });

    await allure.step('Значение количества товара стало 1', async () => {
        await expect(page.getByTestId('item-quantity')).toHaveText('1');
    });

    await allure.step('Отображается название выбранного товара', async () => {
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    });

    await allure.step('Отображается описание выбранного товара', async () => {
        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();
    });

    await allure.step('Кликнуть на кнопку Checkout', async () => {
        await cart_page.clickCheckoutButton();
    });

    await allure.step('Открылась страница ввода информации о покупателе', async () => {
        await expect(page).toHaveURL(process.env.CHECKOUT_PAGE_ONE);
    });

    await allure.step('Ввести данные о пользователе', async () => {
        await cart_page.fillUserInformation(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.ZIPCODE);
    });

    await allure.step('Кликнуть на кнопку Continue', async () => {
        await cart_page.clickContinueButton();
    });

    await allure.step('Открылась страница оформления заказа', async () => {
        await expect(page).toHaveURL(process.env.CHECKOUT_PAGE_TWO);
    });

    await allure.step('Значение количества товара стало 1', async () => {
        await expect(page.getByTestId('item-quantity')).toHaveText('1');
    });

    await allure.step('Отображается название выбранного товара', async () => {
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    });

    await allure.step('Отображается описание выбранного товара', async () => {
        await expect(page.getByTestId('inventory-item-desc')).toBeVisible();
    });

    await allure.step('Отображаются данные метода оплаты', async () => {
        await expect(page.getByTestId('payment-info-label')).toBeVisible();
        await expect(page.getByTestId('payment-info-value')).toBeVisible();
    });

    await allure.step('Отображаются данные метода доставки', async () => {
        await expect(page.getByTestId('shipping-info-label')).toBeVisible();
        await expect(page.getByTestId('shipping-info-value')).toBeVisible();
    });

    await allure.step('Отображается блок с итоговой ценой', async () => {
        await expect(page.getByTestId('subtotal-label')).toBeVisible();
        await expect(page.getByTestId('tax-label')).toBeVisible();
        await expect(page.getByTestId('total-label')).toBeVisible();
    });

    await allure.step('Кликнуть на кнопку Finish', async () => {
        await cart_page.clickFinishButton();
    });

    await allure.step('Отображается сообщение об успешном оформлении заказа', async () => {
        await expect(page.getByTestId('complete-header')).toBeVisible();
        await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
        await expect(page.getByTestId('complete-text')).toBeVisible();
        await expect(page.getByTestId('complete-text')).toHaveText('Your order has been dispatched, ' +
            'and will arrive just as fast as the pony can get there!');
    });

    await allure.step('Кликнуть на кнопку Finish', async () => {
        await cart_page.clickBackToProductsButton();
    });

    await allure.step('Открывается главная страница', async () => {
        await expect(page).toHaveURL(process.env.INVENTORY_PAGE);
    });
});