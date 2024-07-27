import { expect } from "@playwright/test";
import { step } from "../helpers/step";
import { BaseSteps } from "./base-steps";

export class LoginSteps extends BaseSteps {
    @step('Check login page')
    async checkLoginPage() {
        await expect(this.app.loginPage.emailField).toBeVisible();
        await expect(this.app.loginPage.passwordField).toBeVisible();
        await expect(this.app.loginPage.loginButton).toBeVisible();
    }
}