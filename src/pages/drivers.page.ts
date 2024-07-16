import { BaseViewPage } from "./base-view.page";

export class DriversPage extends BaseViewPage{
    readonly nameFilter = this.page.locator('input#search--name-field');
    pageUrl = 'users/drivers';

    readonly table = this.locator('table');
    readonly tableRow = this.table.locator('tbody').locator('tr');
}