import { test } from "../src/fixtures/base";
import { goto } from "../src/pages/navigatable";

test.describe("Other Pages", () => {
    test.beforeEach(async ({ steps, loginPage, driversPage }) => {
        await steps.login(loginPage, driversPage);
        await steps.someStep1();
        await steps.someStep2();
    });

    test('drivers page', async ({ driversPage }) => {
        await goto(driversPage);
    })
})