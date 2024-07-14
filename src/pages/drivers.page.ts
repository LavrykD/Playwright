import { BaseViewPage } from "./base-view.page";

export class DriversPage extends BaseViewPage{
    readonly nameFilter = this.page.locator('input#search--name-field');
    pageUrl = 'users/drivers';
}