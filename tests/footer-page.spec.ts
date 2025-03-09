import { test } from "../fixtures/fixtures";
import { FooterCopyTexts} from "../enum/enum";
import {Selectors} from "../selectors/selectors";

test('Проверка наличия элементов в футере', async ({ footerPageFixture }) => {

    await footerPageFixture.isVisible(Selectors.SocialTwitter);
    await footerPageFixture.isVisible(Selectors.SocialFacebook);
    await footerPageFixture.isVisible(Selectors.SocialLinkedin);
    await footerPageFixture.isVisible(Selectors.FooterCopyText);
    await footerPageFixture.checkText(Selectors.FooterCopyText, FooterCopyTexts.FooterCopyrightText);
});