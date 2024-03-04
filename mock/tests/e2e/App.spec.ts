import { expect, test } from "@playwright/test";


/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(async ({page}) => {
    // ... you'd put it here.
    // TODO: Is there something we need to do before every test case to avoid repeating code?
    await page.goto('http://localhost:8000/')
  })

/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something 
 * you put before parts of your test that might take time to run, 
 * like any interaction with the page.
 */
test('on page load, i see a login button', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  
  await expect(page.getByLabel('Login')).toBeVisible()
})

test('on page load, i dont see the input box until login', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  
  await expect(page.getByLabel('Sign Out')).not.toBeVisible()
  await expect(page.getByLabel('Command input')).not.toBeVisible()
  
  // click the login button
  await page.getByLabel('Login').click();
  await expect(page.getByLabel('Sign Out')).toBeVisible()
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
  // Step 1: Navigate to a URL
  
  await page.getByLabel('Login').click();

  // Step 2: Interact with the page
  // Locate the element you are looking for
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('Awesome command');

  // Step 3: Assert something about the page
  // Assertions are done by using the expect() function
  const mock_input = `Awesome command`
  await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('mode display works', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('mode verbose')
  await page.click('text=/Submitted/'); 

  await expect(page.locator(".repl-history")).toContainText('Mode:verbose')

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('mode brief')
  await page.click('text=/Submitted/'); 

  await expect(page.locator(".repl-history")).toContainText('Mode:brief')
})

test('mode function works', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('mode verbose')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/command: load_file \/path\/to\/fruitAndVegData.csv/)
  await expect(page.locator('table')).toHaveText(/output: /)



  
})

test('default mode is brief', async({page}) => {
  
  await page.getByLabel('Login').click();
  await expect(page.locator(".repl-history")).toContainText('Mode:brief')

})

test('load_file good output', async({page}) => {
  await page.goto('http://localhost:8000/')
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText('Success: File Found and Loaded')



})

test('state-changing load output', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/constellations.csv')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('view')
  await page.click('text=/Submitted/'); 

  await expect(page.locator('table')).toHaveText(/Orion/)


})



test('load_file bad output', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/error.csv')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/Failure: Filepath Error/)

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file ')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/Failure: File Cannot be Found/)
})

test('other commands without loading', async({page}) => {
  await page.goto('http://localhost:8000/')
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('view')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText('No file loaded, please load then try again')



})

test('view good output', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('view')
  await page.click('text=/Submitted/'); 
  const rowCount = await page.locator('table tbody tr').count()
  expect(rowCount).toBe(4)
  await expect(page.locator('table')).toHaveText(/orange/)
})



test('search good output', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('search 0 Apple')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/Apple/)
  await expect(page.locator('table')).toHaveText(/red/)
  await expect(page.locator('table')).toHaveText(/fruit/)
})

test('search bad output', async({page}) => {
  
  await page.getByLabel('Login').click();
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('load_file /path/to/fruitAndVegData.csv')
  await page.click('text=/Submitted/'); 

  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('search 5 orange')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/Error: Index Out of Bounds/)
  
  await page.getByLabel("Command input").click()
  await page.getByLabel('Command input').fill('search 0 corn')
  await page.click('text=/Submitted/'); 
  await expect(page.locator('table')).toHaveText(/Error: Value not found/)

})

test('on page load, i see a button', async ({ page }) => {
  // TODO WITH TA: Fill this in!
});

test('after I click the button, its label increments', async ({ page }) => {
  // TODO WITH TA: Fill this in to test your button counter functionality!
});

test('after I click the button, my command gets pushed', async ({ page }) => {
  // TODO: Fill this in to test your button push functionality!
});