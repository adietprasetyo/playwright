require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://practice.automationtesting.in',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ]
});