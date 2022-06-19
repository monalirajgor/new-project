import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://hostdev.openkey.co/login
  await page.goto('https://hostdev.openkey.co/login');
 
  // Expecte a title "to contain" a "OpenKey | Login"
  await expect(page).toHaveTitle(/OpenKey | Login/);

  // Click [placeholder="Enter Your Email"]
  await page.locator('[placeholder="Enter Your Email"]').click();

  // Fill [placeholder="Enter Your Email"]
  await page.locator('[placeholder="Enter Your Email"]').fill('mrajgor@openkey.co');

  // Click [placeholder="Enter Your Password"]
  await page.locator('[placeholder="Enter Your Password"]').click();

  // Fill [placeholder="Enter Your Password"]
  await page.locator('[placeholder="Enter Your Password"]').fill('Lewisville$1103');

  // Click text=Sign In
  await Promise.all([
        page.locator('text=Sign In').click(),
        page.waitForNavigation(/*{ url: 'https://hostdev.openkey.co/report' }*/)
  ]);

  // Click text=Add Guest GuestsReportProfileHotelsGuest FeedbackLogsHelp / TrainingOK Collatera >> button
  await page.locator('text=Add Guest GuestsReportProfileHotelsGuest FeedbackLogsHelp / TrainingOK Collatera >> button').click();
  await expect(page).toHaveURL('https://hostdev.openkey.co/add-guest');

  // Click #form-guest div:has-text("Country code") >> nth=4
    await page.locator('#form-guest div:has-text("Country code")').nth(4).click();

  // Fill text=Country codePhone Number >> input[role="combobox"]
    await page.locator('text=Country codePhone Number >> input[role="combobox"]').fill('+91');

  // Click input[name="phone"]
  await page.locator('input[name="phone"]').click();

  // Fill input[name="phone"]
  await page.locator('input[name="phone"]').fill('9168515566');

  // Click button:has-text("Search")
  await page.locator('button:has-text("Search")').click();

  // Click .mat-form-field-infix.ng-tns-c57-8
  await page.locator('.mat-form-field-infix.ng-tns-c57-8').click();

  // Click text=Room NumberAdditional RoomsNumber of Nights >> input[type="text"]
    await page.locator('text=Room NumberAdditional RoomsNumber of Nights >> input[type="text"]').click();

  // Fill text=Room NumberAdditional RoomsNumber of Nights >> input[type="text"]
    await page.locator('text=Room NumberAdditional RoomsNumber of Nights >> input[type="text"]').fill('105');
  
  // Click text=105
    await page.locator('text=105').click();
    await page.isEnabled('button:has-text("Create New Session")');
  
  // Click button:has-text("Create New Session")
  await Promise.all([
    page.waitForTimeout(1000),
  
  // Click div:has-text("Create New Session") >> nth=2
  await page.locator('div:has-text("Create New Session")').nth(2).click(),
  await page.locator('button:has-text("Create New Session")').click(),
  //page.waitForNavigation({ url: '/https://hostdev.openkey.co/sessions/\b\d{5}\b/g' })
  ]);

  // Click text=Mobile Key Session
  await page.locator('text=Mobile Key Session').isVisible();

});







