import { test, expect } from '@playwright/test';

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;

/**
 * https://playwright.dev/docs/api/class-test
 * Declares a beforeAll hook that is executed once per worker process before all tests.
 */
test.beforeAll(async ({ playwright }) => {
    test.skip(
      !!process.env.PROD,
      'Test intentionally skipped in production due to data dependency.'
    );
    // start a server
    // create a db connection
    // reuse a sign in state
});

/**
 * https://playwright.dev/docs/api/class-test
 * Declares a beforeEach hook that is executed before each test.
 */
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    // open a URL
    // clean up the DB
    // create a page object
    // dismiss a modal
    // load params
});

/**
 * https://playwright.dev/docs/api/class-test
 * Declares an afterAll hook that is executed once per worker after all tests.
 */
test.afterAll(async ({ page }, testInfo) => {
    console.log('Test file completed.');
    // close a DB connection
});

/**
 * https://playwright.dev/docs/api/class-test
 * Declares an afterEach hook that is executed after each test.
 */
test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});


/**
 * https://playwright.dev/docs/api/class-test#test-describe
 * Declares a group of tests.

    test.describe(title, callback)
    test.describe(callback)
    test.describe(title, details, callback)

 * 
 * 
 * https://playwright.dev/docs/api/class-test
 * Declares a skipped test group, similarly to test.describe(). Tests in the skipped group are never run.
    スキップする。オプション。
    test.describe.skip(title, callback)
    test.describe.skip(title)
    test.describe.skip(title, details, callback)

    test.describe.only('Test Case', () =>{...}も可能)
 */
// test.describe('Test Case', () => {
// test.describe.only('Test Case', () => {
test.describe.skip('Test Case', () => {
    test('Test Scenario One', async ({ page }) => {
        /**
         * https://playwright.dev/docs/api/class-test
         * Declares a test step that is shown in the report.
         * オプション
         */
        await test.step('Step One', async () => {
            // ...
        });

        await test.step('Step Two', async () => {
            // ...
        });

        // ...
    });
  
    test('Test Scenario Two', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
/**
    test.only('Test Scenario Three', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */  
/**
    test.skip('Test Scenario Four', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */

  });
  