import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/login_page';

test('should redirect to products page after auth', async ({ page }) => {
  const playwrightDev = new SauceDemoPage(page);
  await playwrightDev.goto();
  await playwrightDev.auth('standard_user', 'secret_sauce');
  await playwrightDev.loginButton();
  await expect(page.getByText('Products')).toBeVisible();
});