import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { DataTablePage } from '../pages/data-table.page.js';

// Load credentials from environment
const EMAIL = process.env.USER_EMAIL || '';
const PASSWORD = process.env.USER_PASSWORD || '';

test.describe('Edge Data List Automation', () => {
  let page: Page;
  let dataTablePage: DataTablePage;

  test.beforeAll(async ({ browser }) => {
    // Create a single browser context and page shared across all tests
    const context = await browser.newContext();
    page = await context.newPage();

    // Read the ID from environment or use a default
    const id = process.env.DATA_LIST_ID || '';
    const base = (process.env.BASE_URL || '').replace(/\/+$/, '');
    const baseUrl = `${base}/companyworkspace/data_lists/${id}?dimension=1386`;

    // Navigate to the data lists page (redirects to login)
    await page.goto(baseUrl);

    // Perform login
    const loginPage = new LoginPage(page);
    await loginPage.login(EMAIL, PASSWORD);

    // Wait for navigation after login
    await page.waitForLoadState('networkidle');

    // Initialize DataTablePage for all tests
    dataTablePage = new DataTablePage(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should submit Recruitment and Promotion', async () => {
    await dataTablePage.clickRecruitmentPromotion();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Managers with P&L responsibility', async () => {
    await dataTablePage.clickManagersWithPL();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit People managers and individual contributors', async () => {
    await dataTablePage.clickPmAndIc();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Employment', async () => {
    // Register dialog handler BEFORE the action that triggers the alert
    await dataTablePage.handleAlert();
    await dataTablePage.clickEmployment();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Board Composition', async () => {
    await dataTablePage.clickBoardComposition();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test.skip('should submit Equal Pay', async () => {
    await dataTablePage.clickEqualPay();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit High Potentials', async () => {
    await dataTablePage.clickHighPotentials();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Performance', async () => {
    await dataTablePage.clickPerformance();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Leadership Development Training', async () => {
    await dataTablePage.clickLeadershipDevelopmentTraining();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Mentoring', async () => {
    await dataTablePage.clickMentoring();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Sponsorship', async () => {
    await dataTablePage.clickSponsorship();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });

  test('should submit Parental Leave', async () => {
    await dataTablePage.clickParentalLeave();
    await dataTablePage.clickSubmitButton();
    console.log('Test Passed: Successfully navigated back to the initial page.');
  });
});
