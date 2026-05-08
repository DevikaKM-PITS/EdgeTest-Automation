import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object Model for the Data Table / Data Lists page.
 * Handles navigation through all data list sections and form submission.
 */
export class DataTablePage {
  // Data list section locators
  readonly recruitmentPromotion: Locator;
  readonly managersWithPl: Locator;
  readonly pmAndIc: Locator;
  readonly employment: Locator;
  readonly boardComposition: Locator;
  readonly equalPay: Locator;
  readonly highPotentials: Locator;
  readonly performance: Locator;
  readonly leadershipTraining: Locator;
  readonly mentoring: Locator;
  readonly sponsorship: Locator;
  readonly parentalLeave: Locator;

  // Action locators
  readonly submitButton: Locator;

  constructor(private page: Page) {
    this.recruitmentPromotion = page.locator(
      "a.datalist_link.font-onesix-bold.stat-content-space:has-text('Recruitment and promotion')"
    );
    this.managersWithPl = page.locator("a:has-text('Managers with')");
    this.pmAndIc = page.locator(
      "a:has-text('People managers and individual contributors')"
    );
    this.employment = page.locator("a:has-text('Employment')");
    this.boardComposition = page.locator(
      "a:has-text('Board composition') >> nth=1"
    );
    this.equalPay = page.locator("a.datalist_link:has-text('Equal pay')");
    this.highPotentials = page.locator("a:has-text('High potentials')");
    this.performance = page.locator("a:has-text('Performance')");
    this.leadershipTraining = page.locator(
      "a:has-text('Leadership development training')"
    );
    this.mentoring = page.locator("a:has-text('Mentoring')");
    this.sponsorship = page.locator("a:has-text('Sponsorship')");
    this.parentalLeave = page.locator("a:has-text('Parental leave')");

    this.submitButton = page.locator("a:has-text('Submit')");
  }

  // --- Click methods for each data list section ---

  async clickRecruitmentPromotion(): Promise<void> {
    await this.recruitmentPromotion.click();
  }

  async clickManagersWithPL(): Promise<void> {
    await this.managersWithPl.click();
  }

  async clickPmAndIc(): Promise<void> {
    await this.pmAndIc.click();
  }

  async clickEmployment(): Promise<void> {
    await this.employment.click();
  }

  async clickBoardComposition(): Promise<void> {
    await this.boardComposition.click();
  }

  async clickEqualPay(): Promise<void> {
    await this.equalPay.click();
  }

  async clickHighPotentials(): Promise<void> {
    await this.highPotentials.click();
  }

  async clickPerformance(): Promise<void> {
    await this.performance.click();
  }

  async clickLeadershipDevelopmentTraining(): Promise<void> {
    await this.leadershipTraining.click();
  }

  async clickMentoring(): Promise<void> {
    await this.mentoring.click();
  }

  async clickSponsorship(): Promise<void> {
    await this.sponsorship.click();
  }

  async clickParentalLeave(): Promise<void> {
    await this.parentalLeave.click();
  }

  // --- Action methods ---

  /**
   * Click the Submit button.
   */
  async clickSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Register a one-time dialog handler to accept the next alert/confirm dialog.
   * IMPORTANT: Call this BEFORE the action that triggers the dialog.
   */
  async handleAlert(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
  }
}
