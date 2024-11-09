import { test, expect } from '@playwright/test';
import { inventoryPage } from '../pages/inventory_page';

test.beforeEach('Авторизация', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page.getByText('Products')).toBeVisible();
})

test('В карточке товара содержится название, описание, цена, кнопка добавления в корзину', async ({ page }) => {
    await expect(page
        .getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'))
        .toBeVisible();
    await expect(page.getByText('$29.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add to cart' })
        .first())
        .toBeVisible();
})