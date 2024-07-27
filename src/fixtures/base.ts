export * from '@playwright/test';

import { test as base } from '@playwright/test';
import { Steps } from '../steps';
import { API } from '../helpers/api';
import { App } from '../helpers/app';

type TestFixtures = {
    app: App;
    api: API;
    steps: Steps;
};

export const test = base.extend<TestFixtures>({
    app: async ({ page }, use) => await use(new App(page)),
    api: async ({ page }, use) => await use(new API(page.request)),
    steps: async ({ app, api }, use) => await use(new Steps(app, api))
});