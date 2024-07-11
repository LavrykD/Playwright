import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { goto } from '../src/pages/navigatable';

test.describe("Testing login page", () => {
  test('successful login test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await goto(loginPage);
    await loginPage.login();
    await expect(page.getByRole('button', { name: "Test User" })).toBeVisible();
  });

  test('failed login test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login_failed();
    await expect(page.getByRole('alert').getByText("Wrong Email or password")).toBeVisible();
  })
})