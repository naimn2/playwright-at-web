import { Locator, Page } from '@playwright/test';
export class ListItemPage {
    page: Page;
    cardItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardItem = page.locator('');
    }
}