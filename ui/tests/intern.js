if (!process.env.BROWSERSTACK_USER && !process.env.BROWSERSTACK_KEY) {
  console.error('No BrowserStack credentials set in env')
}

// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
  // Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
  // specified browser environments in the `environments` array below as well. See
  // <https://theintern.github.io/intern/#option-capabilities> for links to the different capabilities options for
  // different services.
  //
  // Note that the `build` capability will be filled in with the current commit ID or build tag from the CI
  // environment automatically
  capabilities: {
    'browserstack.local': true,
    fixSessionCapabilities: false,
    resolution: '1920x1080',
  },

  defaultTimeout: 300000,

  // Browsers to run integration testing against. Options that will be permutated are browserName, version, platform,
  // and platformVersion; any other capabilities options specified for an environment will be copied as-is. Note that
  // browser and platform names, and version number formats, may differ between cloud testing systems.
  environments: [
    {
      browserName: 'Chrome',
    },
  ],

  // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
  maxConcurrency: 10,

  // Name of the tunnel class to use for WebDriver tests.
  // See <https://theintern.github.io/intern/#option-tunnel> for built-in options
  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    username: process.env.BROWSERSTACK_USER,
    accessKey: process.env.BROWSERSTACK_KEY,
    verbose: true,
  },

  reporters: ['Pretty'],

  // Configuration options for the module loader; any AMD configuration options supported by the AMD loader in use
  // can be used here.
  // If you want to use a different loader than the default loader, see
  // <https://theintern.github.io/intern/#option-useLoader> for more information.
  loaderOptions: {
    // Packages that should be registered with the loader in each testing environment
    packages: null,
  },

  // Unit test suite(s) to run in each browser
  suites: null,

  // Functional test suite(s) to execute against each browser once unit tests are completed
  functionalSuites: ['tests/functional/**/*.js'],

  // A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
  // to completely disable code coverage.
  excludeInstrumentation: /^(?:tests|node_modules)\//,
})