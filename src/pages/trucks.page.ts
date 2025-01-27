import { BaseViewPage } from "./base-view.page";

export class TrucksPage extends BaseViewPage {
    readonly truckFilter = this.page.getByLabel('Number', { exact: true });
    pageUrl = 'fleets/trucks';

    readonly first_truck = this.page.getByText('Truck1');
}