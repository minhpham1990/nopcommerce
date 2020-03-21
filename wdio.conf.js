require('@babel/register')
exports.config = {
    runner: 'local',
    hostname: 'localhost',//'192.168.1.178',
    port: 4444,
    path: '/wd/hub',
    suites: {
        login: [
            'src/scripts/Login001.js'
        ],
        register:[
            'src/scripts/Register001.js'
        ]
    },
    // Patterns to exclude.
    exclude: [
    // 'path/to/excluded/files'
    ],
    //max instances of test runner
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
        },
    ],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: () => {
        //add Chai assertion to global variable
        global.expect = require("chai").expect;
    },

    afterTest: (test) => {
        //take screen shot when failed test
        if (test.passed === false) {
            let filename = test.fullTitle;
            browser.saveScreenshot(`./error_shot/${filename}.png`);
        }
    }

}
