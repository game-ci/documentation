import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import DonateCtaSection from '../src/components/pages/home/section/donate-cta-section';

vi.mock('@site/src/components/pages/home/section/section', () => ({
  default: ({ children, title }: { children: React.ReactNode; title?: string }) => (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  ),
}));

vi.mock('@site/src/components/molecules/animations/fade-into-view', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const mockMembers = [
  {
    name: 'Generous Studio',
    image: 'https://example.com/avatar.png',
    profile: 'https://opencollective.com/generous',
    totalAmountDonated: 500,
    currency: 'USD',
    role: 'BACKER',
    type: 'ORGANIZATION',
  },
  {
    name: 'Indie Dev',
    image: null,
    profile: 'https://opencollective.com/indie',
    totalAmountDonated: 50,
    currency: 'USD',
    role: 'BACKER',
    type: 'USER',
  },
  {
    name: 'Admin User',
    image: null,
    profile: 'https://opencollective.com/admin',
    totalAmountDonated: 0,
    currency: 'USD',
    role: 'ADMIN',
    type: 'USER',
  },
];

describe('DonateCtaSection', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(
      async () => ({ json: async () => mockMembers }) as unknown as Response,
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the sponsors grid with contributor data', async () => {
    render(<DonateCtaSection />);
    const grid = await screen.findByTestId('sponsors-grid');

    // Should show only backers with donations (2 out of 3 mockMembers).
    const avatars = grid.querySelectorAll('a');
    expect(avatars.length).toBe(2);

    // Total raised + contributor count.
    await waitFor(() => {
      expect(grid.textContent).toContain('$550');
      expect(grid.textContent).toContain('2 contributors');
    });
  });

  it('renders contributor avatars sorted by donation amount (highest first)', async () => {
    render(<DonateCtaSection />);
    const grid = await screen.findByTestId('sponsors-grid');
    const avatars = grid.querySelectorAll('a');

    expect(avatars[0].getAttribute('href')).toBe('https://opencollective.com/generous');
    expect(avatars[1].getAttribute('href')).toBe('https://opencollective.com/indie');
  });

  it('renders the sponsor CTA link to OpenCollective', async () => {
    render(<DonateCtaSection />);
    const sponsorLinks = await screen.findAllByRole('link', { name: /Become a sponsor/ });
    expect(sponsorLinks.length).toBeGreaterThan(0);
    sponsorLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('https://opencollective.com/game-ci');
    });
  });

  it('renders the GitHub contribution link', async () => {
    render(<DonateCtaSection />);
    const githubLinks = await screen.findAllByRole('link', { name: /Contribute on GitHub/ });
    expect(githubLinks.length).toBeGreaterThan(0);
    githubLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('https://github.com/game-ci');
    });
  });
});
