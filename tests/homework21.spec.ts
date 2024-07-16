import { expect, test } from "../src/fixtures/base";
import { goto } from "../src/pages/navigatable";

const driversReq = 'api/v1/drivers?*';

test.describe("Other Pages", () => {

    test('drivers page', async ({ page, steps, driversPage, loginPage }) => {

        const [driversRes] = await Promise.all([
            page.waitForResponse(driversReq),
            steps.login(loginPage, driversPage)
        ]);

        const data = await driversRes.json();

        await expect(driversPage.tableRow).toHaveCount(data.items.length);
    })
})

test('API test example', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/todos/1');

    await expect(res).toBeOK();

    const { id, title } = await res.json();

    expect(id).toBe(1);
    expect(title).toBe('delectus aut autem');
});

test('API me', async ({ request, loginPage, context, page }) => {
    await goto(loginPage);
    await expect(loginPage.loginButton).toBeVisible();
    await loginPage.login();

    const cookies = await context.cookies();
    const token = cookies.find(e => e.name == 'tms_token')?.value;

    const res = await request.get('https://dev.omni-dispatch.com/api/v1/dispatchers/me?', {
        headers: {
            'Authorization': token
        }
    });

    await expect(res).toBeOK();

    const { name } = await res.json();

    console.log(name);
});

test('API me 2', async ({ loginPage, page }) => {
    await goto(loginPage);
    await loginPage.login();

    const res = await page.request.get('https://dev.omni-dispatch.com/api/v1/dispatchers/me?');

    await expect(res).toBeOK();

    const { name } = await res.json();

    console.log(name);
});

test('API me 3', async ({ loginPage, api }) => {
    await goto(loginPage);
    await loginPage.login();


    const data = await api.get('drivers');

    console.log(data);
})