import { test, expect } from "../src/fixtures/base";
import { goto } from "../src/pages/navigatable";

function replaceDigitWithSmiles(num: number): string {
    const smiles = {
        '0': '😀',
        '1': '🫠',
        '2': '🫨',
        '3': '🤤',
        '4': '🤥',
        '5': '🥵',
        '6': '😎',
        '7': '🤢',
        '8': '👺',
        '9': '👽️'
    };

    const num_to_string = num.toString();
    const final_string = num_to_string.split('').map(i => {
        return smiles[i]
    }).join('');
    
    return final_string;
}

test.describe('Mock Trucks response', () => {
    test.beforeEach(async ({ loginPage }) => {
        await goto(loginPage);
        await expect(loginPage.loginButton).toBeVisible();
        await loginPage.login();
    })

    test('Changing values to smiles', async ({ page, trucksPage }) => {
        await page.route('api/v1/trucks?*', async route => {
            const response = await route.fetch();
            const json = await response.json();
            json.items.forEach(item => {
                if (item.trailer) {
                    item.trailer.length = replaceDigitWithSmiles(item.trailer.length);
                    item.trailer.min_height = replaceDigitWithSmiles(item.trailer.min_height);
                    item.trailer.min_width = replaceDigitWithSmiles(item.trailer.min_width);
                    item.trailer.payload = replaceDigitWithSmiles(item.trailer.payload);
                }
            });
            await route.fulfill({ response, json });
        });

        await goto(trucksPage);
        await page.waitForTimeout(30000);
    });
})