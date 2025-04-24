const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      baseurl : "https://naveenautomationlabs.com/opencart/index.php",
      loginurl : "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      registerurl : "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    }
    
  },  
});
