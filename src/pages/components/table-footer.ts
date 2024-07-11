import { Base } from "../base";

export class TableFooter extends Base {
    readonly tableFooter = this.page.locator('div.v-data-table-footer');
}