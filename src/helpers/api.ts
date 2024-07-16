import { APIRequestContext, expect } from "@playwright/test";

const endpoints = {
    me: '/api/v1/dispatchers/me?',
    drivers: '/api/v1/drivers?',
    trucks: '/api/v1/trucks?'
} as const;

export class API {
    constructor(readonly request: APIRequestContext) {}

    async get(name: keyof typeof endpoints) {
        const res = await this.request.get(endpoints[name]);

        await expect(res).toBeOK();

        return res.json();
    }
}