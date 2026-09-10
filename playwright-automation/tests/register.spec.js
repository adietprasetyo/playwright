const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');

test.describe('Register Test', () => {

    test('REG-001 - Register dengan data valid', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.open();

        const email =
            `qa_${Date.now()}@example.com`;

        await registerPage.register(
            email,
            'Password123!'
        );

        await expect(page).toHaveURL(/my-account/);
    });


    test('REG-002 - Register dengan email kosong', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.open();

        await registerPage.register(
            '',
            'Password123!'
        );

        await expect(
            page.locator('#reg_email')
        ).toHaveAttribute('required', '');
    });


    test('REG-003 - Register dengan email tidak valid', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.open();

        await registerPage.register(
            'email-invalid',
            'Password123!'
        );

        await expect(
            page.locator('#reg_email')
        ).toBeVisible();
    });


    test('REG-004 - Register dengan password kosong', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.open();

        await registerPage.register(
            `qa_${Date.now()}@example.com`,
            ''
        );

        await expect(
            page.locator('#reg_password')
        ).toBeVisible();
    });


    test('REG-005 - Register menggunakan email existing', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.open();

        await registerPage.register(
            'existing@example.com',
            'Password123!'
        );

        await expect(
            page.locator('body')
        ).toContainText(/already|error|exist/i);
    });

});