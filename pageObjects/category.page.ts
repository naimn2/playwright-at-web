import { Locator, Page } from '@playwright/test';
export class CategoryPage {
    page: Page;
    btnCarCategory: Locator;
    btnMotorCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnCarCategory = page.locator('');
        this.btnMotorCategory = page.locator('');
    }
}