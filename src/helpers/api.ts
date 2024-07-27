import { APIRequestContext, expect } from "@playwright/test";

const endpoints = {
    me: '/api/v1/dispatchers/me?',
    drivers: '/api/v1/drivers?',
    trucks: '/api/v1/trucks?'
} as const;

export const regexes = {
    signIn: /v1\/sign-in/,
    drivers: /v1\/drivers\?page/
} as const;

export class API {
    constructor(readonly request: APIRequestContext) {}

    async get(name: keyof typeof endpoints, options?: Parameters<APIRequestContext['get']>[1]) {
        const res = await this.request.get(endpoints[name], options);

        await expect(res).toBeOK();

        return res.json();
    }
}