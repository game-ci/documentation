import { test, expect } from '@playwright/test';

const sections = [
  { title: 'The CI/CD platform built for game developers', tag: 'h1' },
  { title: 'Trusted by studios and teams worldwide', tag: 'h2' },
  { title: 'Why GameCI?', tag: 'h2' },
  { title: 'How it works', tag: 'h2' },
  { title: 'Get started in minutes', tag: 'h2' },
  { title: 'Works with your stack', tag: 'h2' },
  { title: 'What developers are saying', tag: 'h2' },
  { title: 'Built by the community, for the community', tag: 'h2' },
];

test.describe('landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all 8 sections', async ({ page }) => {
    for (const section of sections) {
      await expect(page.locator(section.tag, { hasText: section.title }).first()).toBeVisible();
    }
  });

  test('hero CTA buttons are visible and tappable', async ({ page }) => {
    const getStarted = page.locator('a', { hasText: 'Get started' }).first();
    const viewOnGithub = page.locator('a', { hasText: 'View on GitHub' }).first();

    await expect(getStarted).toBeVisible();
    await expect(viewOnGithub).toBeVisible();

    await expect(getStarted).toHaveAttribute('href', '/docs/github/getting-started');
    await expect(viewOnGithub).toHaveAttribute('href', 'https://github.com/game-ci');
  });

  test('hero stats are visible', async ({ page }) => {
    for (const label of ['Projects', 'GitHub stars', 'Discord members', 'Contributors']) {
      await expect(page.locator('text=' + label).first()).toBeVisible();
    }
  });

  test('no horizontal overflow on the page', async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test('all sections fit within viewport width', async ({ page }) => {
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    const sectionElements = page.locator('section');
    const count = await sectionElements.count();

    for (let i = 0; i < count; i++) {
      const box = await sectionElements.nth(i).boundingBox();
      if (box) {
        expect(box.width, `section ${i} overflows viewport`).toBeLessThanOrEqual(viewportWidth);
      }
    }
  });

  test('CTA buttons in donate section are visible', async ({ page }) => {
    const sponsor = page.locator('a', { hasText: 'Become a sponsor' }).first();
    const contribute = page.locator('a', { hasText: 'Contribute on GitHub' }).first();

    await sponsor.scrollIntoViewIfNeeded();
    await expect(sponsor).toBeVisible();
    await expect(contribute).toBeVisible();
  });

  test('code snippet section shows YAML block', async ({ page }) => {
    const codeBlock = page.locator('pre code').first();
    await codeBlock.scrollIntoViewIfNeeded();
    await expect(codeBlock).toBeVisible();
    await expect(codeBlock).toContainText('game-ci');
  });

  test('feature cards are visible', async ({ page }) => {
    for (const feature of ['Free and open source', 'Unity support', 'Five-minute setup']) {
      const card = page.locator('text=' + feature).first();
      await card.scrollIntoViewIfNeeded();
      await expect(card).toBeVisible();
    }
  });

  test('how it works steps are visible', async ({ page }) => {
    for (const step of ['Configure', 'Push', 'Ship']) {
      const element = page.locator('text=' + step).first();
      await element.scrollIntoViewIfNeeded();
      await expect(element).toBeVisible();
    }
  });

  test('platform logos are visible', async ({ page }) => {
    const section = page.locator('section', { hasText: 'Works with your stack' });
    for (const platform of ['GitHub Actions', 'GitLab CI', 'CircleCI']) {
      const element = section.locator('text=' + platform).first();
      await element.scrollIntoViewIfNeeded();
      await expect(element).toBeVisible();
    }
  });

  test('testimonials are visible', async ({ page }) => {
    const heading = page.locator('h2', { hasText: 'What developers are saying' }).first();
    await heading.scrollIntoViewIfNeeded();

    const quotes = page.locator('text=~ Community member');
    await expect(quotes.first()).toBeVisible();
    expect(await quotes.count()).toBeGreaterThanOrEqual(2);
  });

  test('captures full page screenshot for visual review', async ({ page }) => {
    // Wait for animations to settle
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'test-results/landing-page-full.png', fullPage: true });
  });
});
