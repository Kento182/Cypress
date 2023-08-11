const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin =
// require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin =
// require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    chromeWebSecurity: false,
    // projectId: "xfz92c",
    experimentalStudio: true
  },
  
});

// npx cypress run --record --key a4bcdbe1-10a5-44e2-899e-2a7f56c504f2
