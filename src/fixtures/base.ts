export * from '@playwright/test';

import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DriversPage } from '../pages/drivers.page';
import { Steps } from '../steps';

type MyFixtures = {
    loginPage: LoginPage;
    driversPage: DriversPage;
    steps: Steps;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => await use(new LoginPage(page)),
    driversPage: async ({ page }, use) => await use(new DriversPage(page)),
    steps: async ({ page }, use) => await use(new Steps())
});