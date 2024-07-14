import { expect } from "@playwright/test";
import { DriversPage } from "../pages/drivers.page";
import { LoginPage } from "../pages/login.page";
import { goto } from "../pages/navigatable";
import { step } from "../helpers/step";

export class LoginSteps {
    @step('Login user')
    async login(loginPage: LoginPage, driversPage: DriversPage) {
        await goto(loginPage);

        await loginPage.login();

        await goto(driversPage);
        await expect(driversPage.header.userButton).toBeVisible();
    }
}