class ShopPage {

    constructor(page) {
        this.page = page;

        this.products = page.locator('.products .product');

        this.cartLink = page.getByText('Basket');

        this.addToCartButton = page.locator(
            '.add_to_cart_button'
        );
    }

    async open() {
        await this.page.goto('/shop/');
    }

    async openFirstProduct() {
        await this.products.first().click();
    }

    async addFirstProductToCart() {
        await this.addToCartButton.first().click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = { ShopPage };