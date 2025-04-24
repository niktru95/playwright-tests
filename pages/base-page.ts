import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async checkURL(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  async checkText(selector: string, text: string): Promise<void> {
    await expect(this.page.getByTestId(selector)).toHaveText(text);
  }

  async isVisible(selector: string): Promise<void> {
    await expect(this.page.getByTestId(selector)).toBeVisible();
  }

  async isVisibleFirst(selector: string): Promise<void> {
    await expect(this.page.getByTestId(selector).first()).toBeVisible();
  }

  async isHidden(selector: string): Promise<void> {
    await expect(this.page.getByTestId(selector)).toBeHidden();
  }

  async isVisibleGetByText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async checkVisibilityOfElements(selectorList: string[]): Promise<void> {
    for (const item of selectorList) {
      await this.isVisible(item);
    }
  }

  async checkVisibilityOfElementsFirst(selectorList: string[]): Promise<void> {
    for (const item of selectorList) {
      await this.isVisibleFirst(item);
    }
  }

  async checkVisibilityOfElementsByText(selectorList: string[]): Promise<void> {
    for (const item of selectorList) {
      await this.isVisibleGetByText(item);
    }
  }

  async checkHiddenElements(selectorList: string[], indexes?: number[]): Promise<void> {
    const elementsToCheck = indexes ? indexes.map((index) => selectorList[index]) : selectorList;
    for (const item of elementsToCheck) {
      await this.isHidden(item);
    }
  }
}
