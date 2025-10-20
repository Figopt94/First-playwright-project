// @ts-check
import { test, expect } from '@playwright/test';

test('Valid login Automation exercice', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.getByRole('button', { name: 'Consent' }).click();
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Create a name locator.
  const name = page.getByRole('textbox', { name: 'Name' });
  // Fill it.
  await name.fill('Filipe');

  const randomNumber = Math.floor(Math.random() * 1000000); // random 6-digit number
  const emailAddress = `test${randomNumber}@example.com`;

  // Create a email locator.
  const email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
  // Fill it.
  await email.fill(emailAddress);

  // Create a email locator and click
  const botaoSignup = page.getByRole('button', { name: 'Signup' });
  botaoSignup.click();

  await expect(page).toHaveURL(/automationexercise.com/);

  const botaoMr = page.getByRole('radio', { name: 'Mr.' });
  await botaoMr.click();

  const password = page.getByRole('textbox', { name: 'Password *' });
  await password.fill('Pa55word');

  const days = page.locator('#days');
  const month = page.locator('#months');
  const year = page.locator('#years');

  await days.selectOption('19'); // dia 19
  await month.selectOption({ label: 'August' }); // mês agosto
  await year.selectOption('1994'); // ano 1994

  const firstName = page.getByRole('textbox', { name: 'First name *' });
  await firstName.fill('Filipe');

  const lastName = page.getByRole('textbox', { name: 'Last name *' });
  await lastName.fill('Rodrigues');

  const address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
  await address.fill('Rua Sesano, 123');

  const country = page.getByLabel('Country *');
  await country.selectOption({ label: 'India' });

  const state = page.getByRole('textbox', { name: 'State *' });
  await state.fill('Porto');

  const city = page.getByLabel('City *');
  await city.fill('Sao Pedro da Cova');

  const zip = page.locator('#zipcode');
  await zip.fill('45105');

  const phoneNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
  await phoneNumber.fill('919992229');

  const botaoCreateAccount = page.getByRole('button', { name: 'Create Account' });
  await botaoCreateAccount.click();

  // Verificar criação da conta
  await expect(page.getByText('Account Created!')).toBeVisible();
});
