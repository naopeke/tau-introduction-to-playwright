import { test, expect } from '@playwright/test';

//ブラウザ開いた際に遷移するURL
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  //遷移したURLでタイトル表示
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  //このURLリンクにいって
  await page.goto('https://playwright.dev/');

  //'Get started'というリンクをクリックすると
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  //リンククリック後、/introに遷移
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});


/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */

test.only('check Java page', async ({page}) =>{
  // open the page
  await page.goto('https://playwright.dev');
  // click 'get started'
  await page.getByRole('link', {name : 'Get started'}).click();
  //mouse hover the language dropdown in Node.js button
  await page.getByRole('button', {name: 'Node.js'}).hover();
  // click 'java' and matches exactly
  await page.getByText('Java', {exact:true}).click();
  // check the URL
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  // check if "Installing Playwright" is not being displayed
  await expect(page.getByText('Installing Playwright', {exact: true})).not.toBeVisible();
  // check if "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation."
  await expect(page.getByText("Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.")).toBeVisible();
})
/** 
 * Run all the tests against a specific project https://playwright.dev/docs/test-cli
 * npx playwright test tests/ --project=chromium で実行
 * */


// // test.only('check Java page', async ({ page }) => {
// test('check Java page', async ({ page }) => {

//   await page.goto('https://playwright.dev');

//   await page.getByRole('link', {name: 'Get started'}).click();
//   await page.getByRole('button', {name: 'Node.js'}).hover();
//   await page.getByText('Java', { exact:true }).click();
//   // await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); // in case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.

//   await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
//   await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

//   const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
//   await expect(page.getByText(javaDescription)).toBeVisible();

// });