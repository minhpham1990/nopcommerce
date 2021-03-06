require('@babel/register');
exports.config = {
    runner: 'local',
    hostname: "192.168.1.178",//'192.168.1.178',
    port: 4444,
    path: '/wd/hub',
    specs:[
        'src/scripts/Login001.js'
    ],
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
            'goog:chromeOptions': {
                
                args: ['--headless', '--disable-gpu'],
                }
        },
    ],
    logLevels: {
        webdriver: 'silent',
        '@wdio/logger': 'info'
    },
    bail: 0,
    baseUrl: 'https://demo.nopcommerce.com', //process.env.BASE_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
          }]
        
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: () => {
        //using Chai assertion to global variable
        global.expect = require("chai").expect;
        //using Sprintf to global variale
        global.sprintf=require("sprintf-js").sprintf;
        //using wait for display into $(selector)
        //global.$=require("./src/custom_commands/ElementCustom").element;

    },

    afterTest: (test) => {
        //take screen shot when failed test
        if (test.passed === false) {
            const fs = require('fs');
            const path = './errorCapture'
            if(!fs.existsSync(path)){
                fs.mkdirSync(path)
            }
            let filename = test.fullTitle;
            browser.saveScreenshot(`./errorCapture/${filename}.png`);
        }
    },
}
