import { type Page } from '@playwright/test';

/**
 * Page Object Model for the Policies and Practices section.
 * Handles navigation through 5 pages of questions with radio button options.
 */
export class PoliciesPracticesPage {
  constructor(private page: Page) {}

  /**
   * Dismiss the "Signed in successfully" toast banner if it appears.
   */
  async dismissSuccessBanner(): Promise<void> {
    try {
      const closeBtn = this.page.locator('button.btn-close');
      await closeBtn.first().click({ timeout: 5000 });
      await this.page.waitForTimeout(500);
    } catch {
      // Banner may not appear — that's fine
    }
  }

  /**
   * Click "Policies and practices" in the sidebar navigation.
   */
  async navigateToPolicies(): Promise<void> {
    await this.dismissSuccessBanner();
    // Click the sidebar submenu link specifically
    await this.page
      .locator('.sub-menu-link', { hasText: 'Policies and practices' })
      .first()
      .click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter the Policies and Practices form from the overview page.
   * Clicks the pencil/edit icon next to the Policies entry.
   */
  async enterPoliciesForm(): Promise<void> {
    // Click the pencil edit icon on the "Policies and practices" row specifically
    const policiesRow = this.page.locator('tr, div, li').filter({ hasText: /^Policies and practices/ });
    const editIcon = policiesRow.locator('.fa-pencil, .fa-edit, a[title="Edit"], a[href*="edit"]').first();
    // Fallback: if row-scoped locator doesn't work, try within the Policies section
    const fallbackIcon = this.page.locator('h2:has-text("Policies") ~ div .fa-pencil, h2:has-text("Policies") ~ div .fa-edit').first();
    try {
      await editIcon.click({ timeout: 5000 });
    } catch {
      await fallbackIcon.click({ force: true });
    }
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Select the 3rd radio button option for every question on the current page.
   * Groups radio buttons by their name attribute and selects the 3rd option.
   */
  async selectThirdOptionForAllQuestions(): Promise<void> {
    const radioButtons = this.page.locator('input[type="radio"]');
    const count = await radioButtons.count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const name = await radioButtons.nth(i).getAttribute('name');
      if (name && !names.includes(name)) {
        names.push(name);
      }
    }

    for (const name of names) {
      const thirdOption = this.page
        .locator(`input[type="radio"][name="${name}"]`)
        .nth(2);
      await thirdOption.check({ force: true });
    }
  }

  /**
   * Select the 3rd checkbox for any checkbox questions (e.g. Q28).
   */
  async selectThirdCheckboxIfPresent(): Promise<void> {
    const checkboxes = this.page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    if (count >= 3) {
      await checkboxes.nth(2).check({ force: true });
    }
  }

  /**
   * Process a single page: select 3rd option for all questions and handle checkboxes.
   */
  async processPage(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await this.selectThirdOptionForAllQuestions();
    await this.selectThirdCheckboxIfPresent();
  }

  /**
   * Click the "Next" button to proceed to the next page.
   */
  async clickNext(): Promise<void> {
    // Target the Next button inside the form content area, not sidebar links
    const nextBtn = this.page.locator(
      'input[value="Next"], button:has-text("Next"), a.btn:has-text("Next"), .form-actions a:has-text("Next"), .card-body a:has-text("Next")'
    ).first();
    await nextBtn.click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click the "Save & Submit" / "Submit" button within the policies form.
   * Uses force:true to bypass any overlay warnings.
   */
  async clickSubmit(): Promise<void> {
    // Look for the form-level submit button (not the global "Submit all data")
    const submitBtn = this.page.locator(
      'a:has-text("Save"), a:has-text("Submit"):not(:has-text("Submit all data")), button:has-text("Save"), button:has-text("Submit"):not(:has-text("Submit all data"))'
    ).first();
    await submitBtn.click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }
}
