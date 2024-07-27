import { Base } from "./base";
import { expect } from '@playwright/test';
import { User } from '../helpers/users';
import dotenv from 'dotenv';
import { Navigatable } from "./navigatable";
import { regexes } from "../helpers/api";

dotenv.config();

export class LoginPage extends Base implements Navigatable {
    readonly emailField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.locator('button').getByText('Log in');
    readonly wrongCredentialsMessage = this.getByText('Wrong Email or password');

    url() {
        return '/login';
    }

    async waitForLoadState() { }

    async login(user: User) {
        await this.emailField.fill(user.email);
        await this.passwordField.fill(user.password);
        const [res] = await Promise.all([
            this.page.waitForResponse(regexes.signIn),
            this.loginButton.click()
        ]);

        expect(res.ok()).toBeTruthy();
    }
}