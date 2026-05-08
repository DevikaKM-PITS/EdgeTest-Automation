import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object Model for the Login page.
 * Handles authentication via email and password form.
 */
export class LoginPage {
  // Locators
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(private page: Page) {
    this.emailField = page.locator("input[placeholder='Email address']");
    this.passwordField = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator('input#login-id');
  }

  /**
   * Enter email address into the email field.
   */
  async enterEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  /**
   * Enter password into the password field.
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  /**
   * Click the login button.
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  /**
   * Perform a complete login with the given credentials.
   */
  async login(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
