import { Base } from "./base";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { TableFooter } from "./components/table-footer";

export abstract class BaseViewPage extends Base {
    readonly header = new Header(this.page);
    readonly sidebar = new Sidebar(this.page);
    readonly tableFooter = new TableFooter(this.page);
}