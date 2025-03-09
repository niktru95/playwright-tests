import { Page } from '@playwright/test';
import {expect} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(url: string) {
        await this.page.goto(url);
    }

    async checkURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async checkText(selector: string, text: string) {
        await expect(this.page.getByTestId(selector)).toHaveText(text);
    }

    async isVisible(selector: string) {
        await expect(this.page.getByTestId(selector)).toBeVisible();
    }

    async isVisibleFirst(selector: string) {
        await expect(this.page.getByTestId(selector).first()).toBeVisible();
    }

    async isHidden(selector: string) {
        await expect(this.page.getByTestId(selector)).toBeHidden();
    }

    async isVisibleGetByText(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async checkVisibilityOfElements(selectorList: string[]) {
        for (const item of selectorList) {
            await this.isVisible(item);
        }
    }

    async checkVisibilityOfElementsFirst(selectorList: string[]) {
        for (const item of selectorList) {
            await this.isVisibleFirst(item);
        }
    }

    async checkVisibilityOfElementsByText(selectorList: string[]) {
        for (const item of selectorList) {
            await this.isVisibleGetByText(item);
        }
    }

    async checkHiddenElements(selectorList: string[], indexes?: number[]) {
        const elementsToCheck = indexes ? indexes.map(index => selectorList[index]) : selectorList;
        for (const item of elementsToCheck) {
            await this.isHidden(item);
        }
    }
}