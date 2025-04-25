// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
  
//     reporter: 'mochawesome',
//     reporterOptions: {
//       reportDir: 'cypress/reports/mocha',  // base report dir
//       overwrite: false,
//       html: true,
//       json: true,
      
//     },
  
//   video: true,
//   // videosFolder: 'cypress/videos',

//   e2e: {
//     reporter: 'cypress-mochawesome-reporter',
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
   
//   }
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss'
  },
  e2e: {
    setupNodeEvents(on, config) {}
  },
  env: {
    baseurl: "https://naveenautomationlabs.com/opencart/index.php",
    loginurl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    registerurl: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }

});

