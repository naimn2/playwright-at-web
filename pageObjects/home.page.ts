import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;
    btnBurger: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnBurger = page.locator('');
    }

    async clickBtnBurger() {
        await this.btnBurger.click();
    }
}