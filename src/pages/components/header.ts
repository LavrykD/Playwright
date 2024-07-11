import { Base } from "../base";

export class Header extends Base {
    readonly userButton = this.page.locator('[aria-haspopup="menu"]').first();
}