import { test, expect } from '../Fixtures/customFixtures';
import books from '../test-data/books.json';
import { ENV } from '../config/env';

test.beforeEach("logging in", async ({ page }) => {
    await page.goto(ENV.BASE_URL);
})

test.afterEach("Logging off", async ({ page }) => {
    await page.close();
})
test.describe("Cart Functionality", () => {
    for (const data of books) {
        test(`@regression VerifyingCartfor ${data.book}`, async ({ page, cart, gotocart, checkout }) => {
            //await login.goto();
            await cart.SelectingBook(data.book);
            await gotocart.Gotocart();
            await gotocart.validateName(data.book);
            await checkout.checkoutOrder(ENV.FIRSTNAME, ENV.ADDRESS, ENV.STATE, ENV.CITY, ENV.EMAIL, Number(ENV.PINCODE), Number(ENV.PHONE));

        })
    }
})