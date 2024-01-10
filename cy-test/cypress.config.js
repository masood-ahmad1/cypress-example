const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  blockHosts: [
    "*googletagmanager.com",
    "*facebook.com",
    "*facebook.net",
    "*yieldlove.com",
    "*unrulymedia.com",
  ],
  projectId: "tk5n5b",
  video: false,

  defaultCommandTimeout: 120000,
  execTimeout: 300000,
  taskTimeout: 300000,
  pageLoadTimeout: 300000,
  requestTimeout: 25000,
  responseTimeout: 150000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: "https://stage.moshtix.com.au/",
    adminUrl: "https://admin-stage.moshtix.com/v2/clientlogin",
    specPattern: "cypress/e2e/",
    experimentalSessionAndOrigin: false,
  },
});
