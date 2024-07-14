import { Base } from "./base";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { TableFooter } from "./components/table-footer";
import { Navigatable } from "./navigatable";

export abstract class BaseViewPage extends Base implements Navigatable {
    readonly header = new Header(this.page);
    readonly sidebar = new Sidebar(this.page);
    readonly tableFooter = new TableFooter(this.page);
    protected abstract readonly pageUrl: string;

    url() {
        return this.pageUrl;
    }

    async waitForLoadState() { }
}