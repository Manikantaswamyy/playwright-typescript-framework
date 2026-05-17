import {test, expect} from '@playwright/test'
import { Bookspage } from '../Pages/BooksPage';

test("Add to cart",async({page})=>{
    const Cart = new Bookspage(page);
    await page.goto("https://www.booksbykilo.in/children-books");
    await Cart.SelectingBook("Elmer ");

})
