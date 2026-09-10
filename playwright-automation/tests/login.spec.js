const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Test', () => {

    test('LOG-001 - Login dengan credential valid', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            process.env.TEST_USERNAME,
            process.env.TEST_PASSWORD
        );

        await expect(page).toHaveURL(/my-account/);
    });


    test('LOG-002 - Login dengan password salah', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            process.env.TEST_USERNAME,
            'WrongPassword123'
        );

        await expect(
            page.locator('body')
        ).toContainText(/error|incorrect|invalid/i);
    });


    test('LOG-003 - Login dengan username kosong', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            '',
            'Password123!'
        );

        await expect(
            page.locator('#username')
        ).toBeVisible();
    });


    test('LOG-004 - Login dengan password kosong', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'testuser',
            ''
        );

        await expect(
            page.locator('#password')
        ).toBeVisible();
    });


    test('LOG-005 - Login username tidak terdaftar', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'user_not_registered',
            'Password123!'
        );

        await expect(
            page.locator('body')
        ).toContainText(/error|invalid|incorrect/i);
    });

});