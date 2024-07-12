import { BaseViewPage } from "./base-view.page";

export class TrucksPage extends BaseViewPage{
    readonly truckFilter = this.page.getByLabel('Number', { exact: true });

    async filterByName(truckName: string) {
        await this.truckFilter.fill(truckName);
        await this.page.getByRole('button', { name: 'Apply' }).click();
    }

    url() {
        return 'fleets/trucks';
    }

    async waitForLoadState() { }
}