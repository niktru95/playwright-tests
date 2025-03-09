import { test } from "../fixtures/fixtures";
import { FooterCopyTexts} from "../enum/enum";
import {FooterSelectorsArray, Selectors} from "../selectors/selectors";
import * as allure from "allure-js-commons";

test('Проверка наличия элементов в футере', async ({ footerPageFixture }) => {

    await allure.step('В футере отображаются ссылки на социальные сети', async () => {
        await footerPageFixture.checkVisibilityOfElements(FooterSelectorsArray);
    });

    await allure.step('В футере отображается текст копирайта', async () => {
        await footerPageFixture.checkText(Selectors.FooterCopyText, FooterCopyTexts.FooterCopyrightText);
    });
});