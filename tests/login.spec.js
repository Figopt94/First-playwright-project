// @ts-check
import { test, expect } from '@playwright/test';

test('Valid login Automation exercice', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.getByRole('button', { name: 'Consent' }).click();
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Create a locator.
  const email = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
  // Fill it.
  await email.fill('wataryl@mailinator.com');

  const password = page.getByRole('textbox', { name: 'Password' });
  await password.fill('Pa$$w0rd!');

  const botaoLogin = page.getByRole('button', { name: 'Login' });
  botaoLogin.click();



  await expect(page).toHaveURL(/automationexercise.com/);
  // Wait for the .d-block element to be available
  const welcomeMessage = await page.getByRole('heading', { name: 'Full-Fledged practice website' });
  // Get the inner text of the element
  const messageText = await welcomeMessage.innerText();
  // Assertions
  expect(messageText).toContain("Automation Engineers");



});
