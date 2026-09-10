class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');

        this.loginButton = page.locator(
            'input[name="login"]'
        );

        this.logoutLink = page.getByText('Logout');
    }

    async open() {
        await this.page.goto('/my-account/');
    }

    async login(username, password) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}

module.exports = { LoginPage };