import { test, expect } from '@playwright/test';
import { cartPage } from '../pages/cart_page';
import * as allure from "allure-js-commons";

test.beforeEach('Аутентификация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Удаление продукта из корзины', async ({page}) => {
    await allure.displayName('Удаление продукта из корзины');

    const cart_page = new cartPage(page);

    await allure.step('Добавить продукт в корзину', async () => {
        await cart_page.clickAddToCartButton();
    })

    await allure.step('Перейти на страницу проверки заказа', async () => {
        await cart_page.clickShopCartLink();
    })

    await allure.step('Открывается страница корзины', async () => {
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
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
})