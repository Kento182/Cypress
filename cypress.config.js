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
    
  },
  
});
