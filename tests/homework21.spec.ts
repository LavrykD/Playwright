import { test, expect } from "@playwright/test";
import { DriversPage } from "../src/pages/drivers.page";
import { LoginPage } from "../src/pages/login.page";
import { goto } from "../src/pages/navigatable";
import { TrucksPage } from "../src/pages/trucks.page";

test.describe("Other Pages", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
    });

    test('drivers page', async ({ page }) => {
        const driversPage = new DriversPage(page);

        await goto(driversPage);
        await driversPage.header.userButton.click();
        await driversPage.openProfile();
        await expect(page).toHaveURL('https://dev.omni-dispatch.com/account/profile');
    })

    test('filter by driver name', async ({ page }) => {
        const driversPage = new DriversPage(page);

        await goto(driversPage);
        await driversPage.filterByName('Test_Driver1');
        await expect(page.locator('[data-qa="search-results"]')).toContainText('1 results found');
    })

    test('filter by truck name', async ({ page }) => {
        const trucksPage = new TrucksPage(page);

        await goto(trucksPage);
        await trucksPage.filterByName('Truck1');
        await expect(page.locator('[data-qa="search-results"]')).toContainText('1 results found');
    })
})