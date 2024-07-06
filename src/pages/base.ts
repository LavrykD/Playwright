import { Locator, Page } from "@playwright/test";

export abstract class Base {
    protected readonly root: Page | Locator;

    constructor(readonly page: Page) {
        this.root = page;
    }

    protected locator(...args: Parameters<Page['locator']>) {
        return this.root.locator(...args);
    }

    protected getByText(...args: Parameters<Page['getByText']>) {
        return this.root.getByText(...args);
    }

    protected getByType(type: string) {
        return this.locator(`[type="${type}"]`);
    }
}