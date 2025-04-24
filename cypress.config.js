const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  // videosFolder: 'cypress/videos',

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      baseurl: "https://naveenautomationlabs.com/opencart/index.php",
      loginurl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      registerurl: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    }
  }
});
