const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      {
        on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);
        });
  
        on('after:run', async () => {
          console.log('override after:run');
          await afterRunHook();
        });
    }
  },
  
    testIsolation: false,
      "defaultCommandTimeout": 10000,  // Set the default command timeout to 10 seconds
      "retries": {
        "runMode": 2,  // Set the number of retries for the entire test run
        "openMode": 0   // Set the number of retries for each test
      },
      blockHosts: [
        'googleads.g.doubleclick.net',
        'pagead2.googlesyndication.com'
      ],
      recordKey : "asdjkbaskj123213781399"
  },
  
});
