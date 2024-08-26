// spec/runTests.js
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// Configure Jasmine to use the SpecReporter
jasmine.env.clearReporters();
jasmine.addReporter(new SpecReporter({
    spec: {
        displayPending: true,
    }
}));
jasmine.randomizeTests(false);  // Ensure tests run in order


// Import all test files
require('./userSpec.js');
require('./loginUserSpec.js');

// Run the tests
jasmine.execute();
