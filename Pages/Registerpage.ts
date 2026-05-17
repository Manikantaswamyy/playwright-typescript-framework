import { Page, Locator } from '@playwright/test'
import { Logger } from '../Utils/Logger';

export class loginpage {
    //variables(locator names)
    readonly page: Page;
    readonly sigin: Locator;
    readonly register: Locator;
    readonly name: Locator;
    readonly number: Locator;
    readonly email: Locator;
    readonly sendotp: Locator;

    //constructor(declaring locators to the variables)
    constructor(page: Page) {
        this.page = page;
        this.sigin = page.locator("//a[@id='btnLogin']")
        this.register = page.locator("//a[normalize-space()='Register here']");
        this.name = page.locator("//input[@id='txtRegisterName']");
        this.number = page.locator("//input[@id='txtRegisterNumber']");
        this.email = page.locator("//input[@id='txtRegisterEmail']");
        this.sendotp = page.locator("//a[@id='btnRegisterSendOtp']")

    }

    //Methods(login)
    async goto() {
        await this.page.goto("https://www.booksbykilo.in/children-books");
        Logger.info(`Logged in successfully`);
    }

    async Register(username: string, phonenumber: number, mail: string) {

        await this.sigin.click();
        Logger.info("Signed in");
        await this.register.click();
        await this.name.fill(username);
        await this.email.fill(mail);
        await this.number.fill(phonenumber.toString());
        Logger.info("Okay from here there's payment so we have stopped automation");
        await this.sendotp.click;

    }
}