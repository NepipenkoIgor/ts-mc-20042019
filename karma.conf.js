//@ts-nocheck
module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            {pattern: './src/**/*.ts'}
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript'
        },
        reporters: [
            'progress', 'karma-typescript'
        ],
        browser: ["ChromeHeadless"],
        singleRun: true,
        logLevel: config.LOG_DEBUG,
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json',
            reports: {
                html: 'coverage',
                text: ''
            }
        }
    })
}
