export * from '@playwright/test';

import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DriversPage } from '../pages/drivers.page';
import { Steps } from '../steps';
import { API } from '../helpers/api';
import { TrucksPage } from '../pages/trucks.page';

type MyFixtures = {
    loginPage: LoginPage;
    driversPage: DriversPage;
    trucksPage: TrucksPage;
    steps: Steps;
    api: API;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => await use(new LoginPage(page)),
    driversPage: async ({ page }, use) => await use(new DriversPage(page)),
    trucksPage: async ({page}, use) => await use(new TrucksPage(page)),
    steps: async ({ page }, use) => await use(new Steps()),
    api: async ({ page }, use) => await use(new API(page.request))
});