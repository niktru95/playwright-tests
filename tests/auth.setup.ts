import {test as setup, expect} from '@playwright/test';
import * as path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Аутентификация', async ({ page }) => {
    await page.goto(process.env.LOGIN_PAGE);
    await page.getByPlaceholder('Username').fill(process.env.LOGIN);
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL(process.env.INVENTORY_PAGE);
    await expect(page.getByText('Products')).toBeVisible();

    await page.context().storageState({ path: authFile });
});