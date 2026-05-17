import { test as base } from '@playwright/test';
import { Bookspage } from '../Pages/BooksPage';
import { CartPage } from '../Pages/CartPage';
import { checkOut } from '../Pages/CheckOutPage';

type MyFixtures = {

    cart: Bookspage;

    gotocart: CartPage;

    checkout: checkOut;
};

export const test = base.extend<MyFixtures>({

    cart: async ({ page }, use) => {

        await use(new Bookspage(page));
    },

    gotocart: async ({ page }, use) => {

        await use(new CartPage(page));
    },

    checkout: async ({ page }, use) => {

        await use(new checkOut(page));
    }
});

export { expect } from '@playwright/test';