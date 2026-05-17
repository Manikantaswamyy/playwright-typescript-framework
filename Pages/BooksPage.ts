import { Page, Locator } from '@playwright/test'
import { Logger } from '../Utils/Logger';
export class Bookspage {
    //Variables
    readonly Bookslist: Locator;
    //Constructor
    constructor(page: Page) {
        this.Bookslist = page.locator(".category_page");
    }

    //Methods
    async SelectingBook(BookName: string) {
        Logger.info(`Selecting Book: ${BookName}`);
        const count = await this.Bookslist.count();
        for (let i = 0; i < count; i++) {
            const book = this.Bookslist.nth(i);
            const Booktext = await book.textContent();
            if (Booktext?.includes(BookName)) {
                Logger.info(`${BookName} found`);
                await book.locator(".btnMainAddToCart").click();
                Logger.info(`${BookName} added to cart`);
                break;
            }
        }
    }
}