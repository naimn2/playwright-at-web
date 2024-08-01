import { Locator, Page } from '@playwright/test';
export class ListItemPage {
    page: Page;
    cardItem: Locator;
    btnCall: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardItem = page.getByTestId('cardItem');
        this.btnCall = page.getByTestId('btnCall');
    }
}