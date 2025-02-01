import { test, expect } from '@playwright/test';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия элементов в хедере', async ({ page }) => {
    // Отображается бургер-меню
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();

    // Отображается название сайта
    await expect(page.getByText('Swag Labs')).toBeVisible();

    // Отображается кнопка корзины
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
});