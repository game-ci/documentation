import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import DonateCtaSection from '../src/components/pages/home/section/donate-cta-section';

jest.mock('@site/src/components/pages/home/section/section', () => {
  const MockSection = ({ children, title }: { children: React.ReactNode; title?: string }) => (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
  MockSection.defaultProps = { title: '' };
  return MockSection;
});

jest.mock('@site/src/components/molecules/animations/fade-into-view', () => {
  const MockFadeIntoView = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  return MockFadeIntoView;
});

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

function renderToContainer(element: React.ReactElement): HTMLDivElement {
  const container = document.createElement('div');
  document.body.append(container);
  act(() => {
    ReactDOM.render(element, container);
  });
  return container;
}

describe('DonateCtaSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockMembers) } as Response),
    );
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.restoreAllMocks();
  });

  it('renders the sponsors grid with contributor data', async () => {
    let container: HTMLDivElement;
    await act(async () => {
      container = renderToContainer(<DonateCtaSection />);
    });

    const grid = container.querySelector('[data-testid="sponsors-grid"]');
    expect(grid).toBeTruthy();

    // Should show only backers with donations (2 out of 3)
    const avatars = grid.querySelectorAll('a');
    expect(avatars.length).toBe(2);

    // Should show total raised
    expect(grid.textContent).toContain('$550');
    expect(grid.textContent).toContain('2 contributors');
  });

  it('renders contributor avatars sorted by donation amount', async () => {
    let container: HTMLDivElement;
    await act(async () => {
      container = renderToContainer(<DonateCtaSection />);
    });

    const grid = container.querySelector('[data-testid="sponsors-grid"]');
    const avatars = grid.querySelectorAll('a');

    // First should be highest donor
    expect(avatars[0].getAttribute('href')).toBe('https://opencollective.com/generous');
    expect(avatars[1].getAttribute('href')).toBe('https://opencollective.com/indie');
  });

  it('renders the sponsor CTA link to OpenCollective', async () => {
    let container: HTMLDivElement;
    await act(async () => {
      container = renderToContainer(<DonateCtaSection />);
    });

    const links = Array.prototype.slice.call(
      container.querySelectorAll('a'),
    ) as HTMLAnchorElement[];
    const sponsorLink = links.find((a) => a.textContent?.includes('Become a sponsor'));

    expect(sponsorLink).toBeTruthy();
    expect(sponsorLink?.getAttribute('href')).toBe('https://opencollective.com/game-ci');
  });

  it('renders the GitHub contribution link', async () => {
    let container: HTMLDivElement;
    await act(async () => {
      container = renderToContainer(<DonateCtaSection />);
    });

    const links = Array.prototype.slice.call(
      container.querySelectorAll('a'),
    ) as HTMLAnchorElement[];
    const githubLink = links.find((a) => a.textContent?.includes('Contribute on GitHub'));

    expect(githubLink).toBeTruthy();
    expect(githubLink?.getAttribute('href')).toBe('https://github.com/game-ci');
  });
});
