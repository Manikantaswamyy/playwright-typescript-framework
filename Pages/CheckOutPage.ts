import { test, expect, Page, Locator } from '@playwright/test'
import { Logger } from '../Utils/Logger';

export class checkOut {
    //Variables
    readonly checkoutButton;
    readonly Firstname: Locator;
    readonly Address: Locator;
    readonly State: Locator;
    readonly City: Locator;
    readonly email: Locator;
    readonly pinCode: Locator;
    readonly phone: Locator;
    readonly AgreeTerms: Locator;
    readonly processOrder: Locator;

    //Constructor
    constructor(page: Page) {
        this.checkoutButton = page.locator("//a[normalize-space()='checkout']");
        this.Firstname = page.locator("#CheckoutFullName");
        this.Address = page.locator("#CheckoutFullAddress");
        this.State = page.locator("#CheckoutState");
        this.City = page.locator("#CheckoutCity");
        this.email = page.locator("#CheckoutEmail");
        this.pinCode = page.locator("#CheckoutPincode");
        this.phone = page.locator("#CheckoutPhone");
        this.AgreeTerms = page.locator("#chkAgree");
        this.processOrder = page.locator("#CheckoutProcessOrder");
    }
    //Methods
    async checkoutOrder(firstname: string, address: string, State: string, City: string, email: string, pincode: number, phone: number) {
        Logger.info("Filling detials");
        await this.checkoutButton.click();
        await this.Firstname.fill(firstname);
        await this.Address.fill(address);
        await this.State.fill(State);
        await this.City.fill(City);
        await this.email.fill(email);
        await this.pinCode.fill(pincode.toString());
        await this.phone.fill(phone.toString());
        await this.AgreeTerms.click();
        await this.processOrder.click();
        Logger.info("Detials filled");
    }
}