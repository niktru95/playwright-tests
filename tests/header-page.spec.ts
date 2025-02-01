import { test, expect } from '@playwright/test';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия элементов в хедере', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
});