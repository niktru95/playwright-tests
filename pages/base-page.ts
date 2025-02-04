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

    async checkQuantity(selector: string, quantity: string) {
        await expect(this.page.getByTestId(selector)).toHaveText(quantity);
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

    async fillText(selector: string, text: string) {
        await this.page.getByTestId((selector)).fill(text);
    }

    async isVisibleGetByText(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }
}