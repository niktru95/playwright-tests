import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { CartSelectorsArray, Selectors } from '../selectors/selectors';
import { CartWarnings } from '../enum/enum';
import { faker } from '@faker-js/faker';

export class CartPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipcode: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.zipcode = page.getByPlaceholder('Zip/Postal Code');
  }

  async fillUserInformation(): Promise<void> {
    await this.firstName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.zipcode.fill(faker.location.zipCode('######'));
  }

  async checkApprovedOrder(): Promise<void> {
    await this.checkURL('/checkout-step-two.html');
    await this.checkText(Selectors.ItemQuantity, '1');
    await this.checkVisibilityOfElements(CartSelectorsArray);
  }

  async checkApproveText(): Promise<void> {
    await this.checkText(Selectors.TextHeader, CartWarnings.CompleteHeaderText);
    await this.checkText(Selectors.TextComplete, CartWarnings.CompleteOrderText);
  }
}
