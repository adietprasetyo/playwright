const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MyAccountPage } = require('../pages/MyAccountPage');

test.describe('My Account Test', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            process.env.TEST_USERNAME,
            process.env.TEST_PASSWORD
        );
    });


    test('ACC-001 - Membuka My Account', async ({ page }) => {

        const accountPage = new MyAccountPage(page);

        await accountPage.open();

        await expect(
            accountPage.dashboard
        ).toBeVisible();
    });


    test('ACC-002 - Memeriksa informasi account', async ({ page }) => {

        const accountPage = new MyAccountPage(page);

        await accountPage.open();

        await expect(
            page.locator('.woocommerce-MyAccount-content')
        ).toBeVisible();
    });


    test('ACC-003 - Membuka Orders', async ({ page }) => {

        const accountPage = new MyAccountPage(page);

        await accountPage.open();

        await accountPage.openOrders();

        await expect(page).toHaveURL(/orders/);
    });


    test('ACC-004 - Membuka Downloads', async ({ page }) => {

        const accountPage = new MyAccountPage(page);

        await accountPage.open();

        await accountPage.openDownloads();

        await expect(page).toHaveURL(/downloads/);
    });


    test('ACC-005 - Logout', async ({ page }) => {

        const accountPage = new MyAccountPage(page);

        await accountPage.open();

        await accountPage.logoutUser();

        await expect(page).toHaveURL(/my-account/);
    });

});