import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  // Directory containing test files
  testDir: './tests',

  // Maximum time a test can run (2 minutes per test)
  timeout: 120_000,

  // Maximum time for expect() assertions
  expect: {
    timeout: 10_000,
  },

  // Run tests sequentially (shared session within describe block)
  fullyParallel: false,

  // Fail the build on CI if test.only is left in source
  forbidOnly: !!process.env.CI,

  // Retry failed tests once
  retries: 1,

  // Single worker since tests share a login session
  workers: 1,

  // Reporter configuration
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  // Shared settings for all projects
  use: {
    // Base URL for navigation
    baseURL: process.env.BASE_URL,

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Record trace on first retry
    trace: 'on-first-retry',

    // Browser viewport
    viewport: { width: 1920, height: 1080 },

    // Action timeout
    actionTimeout: 15_000,

    // Navigation timeout
    navigationTimeout: 30_000,
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
