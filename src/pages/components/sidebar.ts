import { Base } from "../base";

export class Sidebar extends Base {
    readonly sidebar = this.page.locator('nav#main-sidebar');
}