import { test, expect } from '@playwright/test';

test.beforeEach('Переход на страницу проекта', async ({ page }) => {
    await page.goto('/inventory.html');
});

test('Проверка наличия элементов в футере', async ({ page }) => {
    await expect(page.getByTestId('social-twitter')).toBeVisible();

    await expect(page.getByTestId('social-facebook')).toBeVisible();

    await expect(page.getByTestId('social-linkedin')).toBeVisible();

    await expect(page.getByTestId('footer-copy')).toBeVisible();
    await expect(page.getByTestId('footer-copy')).toHaveText(
        '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'
    );
});