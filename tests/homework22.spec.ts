import { test, expect } from "../src/fixtures/base";
import { goto } from "../src/pages/navigatable";

test.describe('API Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await goto(loginPage);
        await expect(loginPage.loginButton).toBeVisible();
        await loginPage.login();
    })

    test('API Test 1', async ({ api }) => {
        const data = await api.get('me');

        expect(data.name).toBe('Test User');
    });

    test('API Test 2', async ({ api, driversPage }) => {
        await goto(driversPage);
        const data = await api.get('drivers');

        await expect(driversPage.tableRow).toHaveCount(data.items.length);
    });

    test('API Test 3', async ({ api, trucksPage }) => {
        await goto(trucksPage);
        const data = await api.get('trucks');

        await expect(trucksPage.first_truck).toHaveText(data.items[0].number);
    });
})