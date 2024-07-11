import { BaseViewPage } from "./base-view.page";
import { Navigatable } from "./navigatable";

export class DriversPage extends BaseViewPage implements Navigatable {
    readonly nameFilter = this.page.locator('input#search--name-field');

    async filterByName(driverName: string) {
        await this.nameFilter.fill(driverName);
        await this.page.getByRole('button', { name: 'Apply' }).click();
    }

    async openProfile() {
        await this.header.userButton.click();
        const profileButton = this.page.getByText('Profile');
        await profileButton.click();
    }

    url() {
        return 'users/drivers';
    }

    async waitForLoadState() { }
}