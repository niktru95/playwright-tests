// Тест на кнопку Reset App State написан не будет (состояние сайта не меняется)
import { test } from "../fixtures/fixtures";

test.describe('Проверка работы сайдбара', () => {

    test('Проверка наличия элементов в боковом меню', async ({ sidebarPageFixture }) => {

        await sidebarPageFixture.clickBurgerMenu();

        await sidebarPageFixture.isVisibleGetByText('All Items');
        await sidebarPageFixture.isVisibleGetByText('About');
        await sidebarPageFixture.isVisibleGetByText('Logout');
        await sidebarPageFixture.isVisibleGetByText('Reset App State');
    });

    test('Клик на кнопку All items ведет на главную страницу', async ({ sidebarPageFixture }) => {

        await sidebarPageFixture.goTo('/inventory-item.html?id=4');
        await sidebarPageFixture.checkURL('/inventory-item.html?id=4');

        await sidebarPageFixture.clickBurgerMenu();
        await sidebarPageFixture.clickAllItems();

        await sidebarPageFixture.checkURL('/inventory.html');
    });

    test('Клик на кнопку About ведет на страницу о проекте Sauce Lab', async ({ sidebarPageFixture }) => {

        await sidebarPageFixture.clickBurgerMenu();
        await sidebarPageFixture.clickAboutItem();

        await sidebarPageFixture.checkURL('https://saucelabs.com/');
    });
});
