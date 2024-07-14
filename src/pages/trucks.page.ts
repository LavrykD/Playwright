import { BaseViewPage } from "./base-view.page";

export class TrucksPage extends BaseViewPage{
    readonly truckFilter = this.page.getByLabel('Number', { exact: true });

    url() {
        return 'fleets/trucks';
    }

    async waitForLoadState() { }
}