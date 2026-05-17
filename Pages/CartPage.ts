import { test, expect, Page, Locator } from '@playwright/test'
import { Logger } from '../Utils/Logger';

export class CartPage {
    //Variables
    readonly cart: Locator;
    readonly viewcart: Locator;
    readonly productname: Locator;
    readonly checkout: Locator;
    //Constructor
    constructor(page: Page) {
        this.cart = page.locator(".fa.fa-shopping-cart");
        this.viewcart = page.locator(".btn.btn-primary");
        this.productname = page.locator("a[href='Javascript:']");
        this.checkout = page.locator("div[class='text-right'] a:nth-child(2)");
    }
    //Methods
    async Gotocart() {
        await this.cart.click();
        Logger.info("Going to cart");
        await this.viewcart.click();
        Logger.info("Going to cart is successfull");
    }
    async validateName(expectedBook: string) {
        Logger.info(`${expectedBook} Validating this product is present in the cart`);
        await expect(this.productname).toContainText(expectedBook);
        Logger.info(`${expectedBook} Product is validated`);
    }

}