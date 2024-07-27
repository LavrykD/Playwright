import { Base } from "../base";

export class Sidebar extends Base {
    readonly sidebar = this.page.locator('#main-sidebar');
    readonly companyName = this.sidebar.locator('.company-name');
}