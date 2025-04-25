export const CartSelectorsArray = [
  'inventory-item-name',
  'inventory-item-desc',
  'payment-info-label',
  'payment-info-value',
  'shipping-info-label',
  'shipping-info-value',
  'subtotal-label',
  'tax-label',
  'total-label',
];

export const FooterSelectorsArray = [
  'social-twitter',
  'social-facebook',
  'social-linkedin',
  'footer-copy',
];

export const InventorySelectorsArray = [
  'inventory-item-name',
  'inventory-item-desc',
  'inventory-item-price',
  'add-to-cart-sauce-labs-backpack',
];

export const SidebarSelectorsArray = ['All Items', 'About', 'Logout', 'Reset App State'];

export const Selectors = {
  InventoryItemName: 'inventory-item-name',
  InventoryItemDesc: 'inventory-item-desc',
  InventoryItemPrice: 'inventory-item-price',
  PaymentInfoLabel: 'payment-info-label',
  PaymentInfoValue: 'payment-info-value',
  ShippingInfoLabel: 'shipping-info-label',
  ShippingInfoValue: 'shipping-info-value',
  SubtotalLabel: 'subtotal-label',
  TaxLabel: 'tax-label',
  TotalLabel: 'total-label',
  ItemQuantity: 'item-quantity',
  TextHeader: 'complete-header',
  TextComplete: 'complete-text',
  SocialTwitter: 'social-twitter',
  SocialFacebook: 'social-facebook',
  SocialLinkedin: 'social-linkedin',
  FooterCopyText: 'footer-copy',
  ShoppingCartLink: 'shopping-cart-link',
  AddToCartItem: 'add-to-cart-sauce-labs-backpack',
  AddToCartApprove: 'add-to-cart',
  AboutSidebarLink: 'about-sidebar-link',
  RemoveSauceLabsBackpack: 'remove-sauce-labs-backpack',
  CheckoutButton: 'checkout',
  ContinueButton: 'continue',
  FinishButton: 'finish',
  BackToProductsButton: 'back-to-products',
  LogoutButton: 'logout-sidebar-link',
  Title: 'title',
} as const;
