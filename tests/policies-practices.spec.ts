import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { PoliciesPracticesPage } from '../pages/policies-practices.page.js';


const EMAIL = process.env.USER_EMAIL || '';
const PASSWORD = process.env.USER_PASSWORD || '';

test.describe('Policies and Practices Automation', () => {
  let page: Page;
  let policiesPage: PoliciesPracticesPage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();

    const id = process.env.DATA_LIST_ID || '';
    const base = (process.env.BASE_URL || '').replace(/\/+$/, '');
    const baseUrl = `${base}/companyworkspace/data_lists/${id}`;

    await page.goto(baseUrl);

    const loginPage = new LoginPage(page);
    await loginPage.login(EMAIL, PASSWORD);
    await page.waitForLoadState('networkidle');

    policiesPage = new PoliciesPracticesPage(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should navigate to Policies and Practices form', async () => {
    await policiesPage.navigateToPolicies();
    await policiesPage.enterPoliciesForm();
    console.log('Navigated into Policies and Practices form.');
  });

  test('should complete Page 1 - Equal pay for equivalent work', async () => {
    await policiesPage.processPage();
    await policiesPage.clickNext();
    console.log('Page 1 completed: Equal pay for equivalent work');
  });

  test('should complete Page 2 - Recruitment and promotion', async () => {
    await policiesPage.processPage();
    await policiesPage.clickNext();
    console.log('Page 2 completed: Recruitment and promotion');
  });

  test('should complete Page 3 - Professional development and training', async () => {
    await policiesPage.processPage();
    await policiesPage.clickNext();
    console.log('Page 3 completed: Professional development and training');
  });

  test('should complete Page 4 - Flexible working', async () => {
    await policiesPage.processPage();
    await policiesPage.clickNext();
    console.log('Page 4 completed: Flexible working');
  });

  test('should complete Page 5 - Organizational culture and Submit', async () => {
    await policiesPage.processPage();
    await policiesPage.clickSubmit();
    console.log('Page 5 completed: Organizational culture - Form submitted');
  });
});
