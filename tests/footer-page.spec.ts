import { test } from '../fixtures/fixtures';
import { FooterCopyTexts } from '../enum/enum';
import { FooterSelectorsArray, Selectors } from '../selectors/selectors';

test.describe('Проверка футера', () => {
  test('Проверка наличия элементов в футере', async ({ footerPageFixture }) => {
    await test.step('В футере отображаются ссылки на социальные сети', async () => {
      await footerPageFixture.checkVisibilityOfElements(FooterSelectorsArray);
    });

    await test.step('В футере отображается текст копирайта', async () => {
      await footerPageFixture.checkText(
        Selectors.FooterCopyText,
        FooterCopyTexts.FooterCopyrightText,
      );
    });
  });
});
