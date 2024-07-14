import { Base } from "../base";

export class Header extends Base {
    protected readonly root = this.locator('header');
    readonly userButton = this.locator('[aria-haspopup="menu"]').first();
}