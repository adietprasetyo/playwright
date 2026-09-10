class MyAccountPage {

    constructor(page) {
        this.page = page;

        this.dashboard = page.getByText('Dashboard');
        this.orders = page.getByText('Orders');
        this.downloads = page.getByText('Downloads');
        this.logout = page.getByText('Logout');
    }

    async open() {
        await this.page.goto('/my-account/');
    }

    async openOrders() {
        await this.orders.click();
    }

    async openDownloads() {
        await this.downloads.click();
    }

    async logoutUser() {
        await this.logout.click();
    }
}

module.exports = { MyAccountPage };