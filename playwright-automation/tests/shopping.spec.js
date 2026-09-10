const { test, expect } = require('@playwright/test');
const { ShopPage } = require('../pages/ShopPage');

test.describe('Shopping Test', () => {

    test('SHOP-001 - Membuka halaman Shop', async ({ page }) => {

        const shopPage = new ShopPage(page);

        await shopPage.open();

        await expect(
            shopPage.products.first()
        ).toBeVisible();
    });


    test('SHOP-002 - Membuka detail product', async ({ page }) => {

        const shopPage = new ShopPage(page);

        await shopPage.open();

        await shopPage.openFirstProduct();

        await expect(page).toHaveURL(/shop/);
    });


    test('SHOP-003 - Menambahkan product ke cart', async ({ page }) => {

        const shopPage = new ShopPage(page);

        await shopPage.open();

        await shopPage.addFirstProductToCart();

        await expect(
            page.locator('.cartcontents')
        ).toBeVisible();
    });


    test('SHOP-004 - Mengubah quantity product', async ({ page }) => {

        const shopPage = new ShopPage(page);

        await shopPage.open();

        await shopPage.addFirstProductToCart();

        await shopPage.openCart();

        const quantity =
            page.locator('.quantity input');

        await quantity.first().fill('2');

        await page.getByText(/update basket/i).click();

        await expect(quantity.first()).toHaveValue('2');
    });


    test('SHOP-005 - Menghapus product dari cart', async ({ page }) => {

        const shopPage = new ShopPage(page);

        await shopPage.open();

        await shopPage.addFirstProductToCart();

        await shopPage.openCart();

        await page.locator('.remove').first().click();

        await expect(
            page.locator('.cart-empty')
        ).toBeVisible();
    });

});