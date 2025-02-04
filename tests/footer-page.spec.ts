import { test } from '@playwright/test';
import {FooterPage} from "../pages/footer_page";

test('Проверка наличия элементов в футере', async ({ page }) => {
    const footerPage = new FooterPage(page)
    await footerPage.goTo('/inventory.html');

    await footerPage.isVisible('social-twitter');
    await footerPage.isVisible('social-facebook');
    await footerPage.isVisible('social-linkedin');
    await footerPage.isVisible('footer-copy');
    await footerPage.checkText('footer-copy', '© 2025 Sauce Labs. All Rights Reserved. ' +
        'Terms of Service | Privacy Policy');
});