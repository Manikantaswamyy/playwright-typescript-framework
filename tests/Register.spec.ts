import {test, expect} from '@playwright/test'
import { loginpage } from '../Pages/Registerpage';

test('Register to the portal', async ({ page }) => {
  // registration test steps go here
  const login = new loginpage(page);
  await login.goto();
  await login.Register('mani',3333,'mani@gmail.com');
})