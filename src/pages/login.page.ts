import { Base } from "./base";
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage extends Base {
    readonly emailField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.page.getByRole('button', { name: 'Log in' });

    async login() {
        await this.page.goto('https://dev.omni-dispatch.com/login');

        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;
        
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    };

    async login_failed() {
        await this.page.goto('https://dev.omni-dispatch.com/login');
        
        await this.loginButton.click();
    }
}