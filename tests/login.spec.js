// @ts-check
import { test, expect } from '@playwright/test';

test('Valid login Automation exercice', async ({ page }) => {
  await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });

  // Cookie / consent banners can vary by locale and may not always appear in CI.
  // Locate a button that likely matches common consent texts and click if present.
  const consentBtn = page.locator('button', { hasText: /Consentir|Accept|Aceitar|Aceptar|I agree/i });
  if (await consentBtn.count() > 0) {
    await consentBtn.first().click();
  }
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Create a locator.
  const email = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
  // Fill it.
  await email.fill('wataryl@mailinator.com');

  // Password input is more reliable to locate by input[type=password]
  const password = page.locator('input[type="password"]');
  await password.fill('Pa$$w0rd!');

  const botaoLogin = page.getByRole('button', { name: 'Login' });
  await botaoLogin.click();



  await expect(page).toHaveURL(/automationexercise.com/);
  // Wait for the page heading to appear and verify it contains expected text (case-insensitive)
  const welcomeMessage = page.getByRole('heading', { name: /Full-Fledged practice website/i });
  await expect(welcomeMessage).toBeVisible();
  const messageText = await welcomeMessage.innerText();
  expect(messageText.toLowerCase()).toContain('automation');



});
