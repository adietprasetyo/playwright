class RegisterPage {

    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#reg_email');
        this.passwordInput = page.locator('#reg_password');

        this.registerButton = page.locator(
            'input[name="register"]'
        );
    }

    async open() {
        await this.page.goto('/my-account/');
    }

    async register(email, password) {

        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await this.registerButton.click();
    }
}

module.exports = { RegisterPage };