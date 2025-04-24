import { Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';
import { CartSelectorsArray, Selectors } from '../selectors/selectors';
import { CartWarnings } from '../enum/enum';
import { faker } from '@faker-js/faker';

export class CartPage extends BasePage {
  readonly addToCartButton: Locator;
  readonly shopCartLink: Locator;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipcode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.shopCartLink = page.getByTestId('shopping-cart-link');
    this.removeButton = page.getByTestId('remove-sauce-labs-backpack');
    this.checkoutButton = page.getByTestId('checkout');
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.zipcode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.backToProductsButton = page.getByTestId('back-to-products');
  }

  async clickAddToCartButton(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickShopCartLink(): Promise<void> {
    await this.shopCartLink.click();
  }

  async clickRemoveButton(): Promise<void> {
    await this.removeButton.click();
  }

  async clickCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }

  async fillUserInformation(): Promise<void> {
    await this.firstName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.zipcode.fill(faker.location.zipCode('######'));
  }

  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

  async clickFinishButton(): Promise<void> {
    await this.finishButton.click();
  }

  async clickBackToProductsButton(): Promise<void> {
    await this.backToProductsButton.click();
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
