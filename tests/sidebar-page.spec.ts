// Тест на кнопку Reset App State написан не будет (состояние сайта не меняется)
import { test } from '../fixtures/fixtures';
import { Selectors, SidebarSelectorsArray } from '../selectors/selectors';

test.describe('Проверка работы сайдбара', () => {
  test('Проверка наличия элементов в боковом меню', async ({ sidebarPageFixture }) => {
    await test.step('Отображаются пункты бокового меню', async () => {
      await sidebarPageFixture.checkVisibilityOfElementsByText(SidebarSelectorsArray);
    });
  });

  test('Клик на кнопку All items ведет на главную страницу', async ({ sidebarPageFixture }) => {
    await test.step('Кликнуть на пункт All Items', async () => {
      await sidebarPageFixture.clickAllItems();
    });

    await test.step('Произошел переход на главную страницу', async () => {
      await sidebarPageFixture.checkURL('/inventory.html');
    });
  });

  test('Клик на кнопку About ведет на страницу о проекте Sauce Lab', async ({
    sidebarPageFixture,
  }) => {
    await test.step('Кликнуть на пункт "About"', async () => {
      await sidebarPageFixture.clickElement(Selectors.AboutSidebarLink);
    });

    await test.step('Совершен переход на страницу проекта saucelabs', async () => {
      await sidebarPageFixture.checkURL('https://saucelabs.com/');
    });
  });
});
