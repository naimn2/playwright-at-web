import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;
    btnBurger: Locator;
    btnMyAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnBurger = page.locator('');
        this.btnMyAccount = page.getByTestId('btnMyAccount');
    }

    async clickBtnBurger() {
        await this.btnBurger.click();
    }
}