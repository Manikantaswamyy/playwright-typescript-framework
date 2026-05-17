import {test,expect} from '@playwright/test';

test('verify title of page',async({page})=>{
    page.goto("www.google.com");
    const title = await page.title();
    expect(title).toMatch("Google");
})