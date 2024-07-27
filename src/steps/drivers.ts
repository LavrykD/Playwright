import { step } from "../helpers/step";
import { goto } from "../pages/navigatable";
import { BaseSteps } from "./base-steps";

export class DriversSteps extends BaseSteps {
    @step('Open drivers page')
    async openDriversPage() {
        await Promise.all([this.app.driversPage.waitForLoadState(), goto(this.app.driversPage)]);
    }
}