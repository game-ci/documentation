import React, { useEffect, useState } from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

interface OpenCollectiveMember {
  name: string;
  image: string | null;
  profile: string;
  totalAmountDonated: number;
  currency: string;
  role: string;
  type: string;
  tier?: string;
}

const MEMBERS_URL = 'https://opencollective.com/game-ci/members/all.json';

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

/** Fetches and filters OpenCollective members who have actually donated. */
function useContributors(): { contributors: OpenCollectiveMember[]; loading: boolean } {
  const [contributors, setContributors] = useState<OpenCollectiveMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MEMBERS_URL)
      .then((response) => response.json())
      .then((members: OpenCollectiveMember[]) => {
        const donors = members
          .filter((m) => m.totalAmountDonated > 0 && m.role === 'BACKER')
          .sort((a, b) => b.totalAmountDonated - a.totalAmountDonated);

        // Deduplicate by profile URL (API sometimes returns duplicates)
        const seen = new Set<string>();
        const unique = donors.filter((m) => {
          if (seen.has(m.profile)) return false;
          seen.add(m.profile);
          return true;
        });

        setContributors(unique);
      })
      .catch(() => {
        // Silently fail — the section still renders without contributor data
      })
      .finally(() => setLoading(false));
  }, []);

  return { contributors, loading };
}

const ContributorAvatar = ({ member }: { member: OpenCollectiveMember }) => (
  <a
    href={member.profile}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1 w-20 group"
    title={`${member.name} — ${formatCurrency(member.totalAmountDonated)}`}
  >
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 group-hover:border-primary-light dark:group-hover:border-primary-dark transition-colors">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300">
          {member.name.charAt(0)}
        </div>
      )}
    </div>
    <span className="text-[10px] leading-tight text-brand-text-light/60 dark:text-brand-text-dark/60 text-center truncate w-full">
      {member.name}
    </span>
    <span className="text-[10px] font-semibold text-primary-light dark:text-primary-dark">
      {formatCurrency(member.totalAmountDonated)}
    </span>
  </a>
);

const ContributorGrid = () => {
  const { contributors, loading } = useContributors();

  if (loading) {
    return (
      <p className="text-sm text-brand-text-light/40 dark:text-brand-text-dark/40">
        Loading sponsors…
      </p>
    );
  }

  if (contributors.length === 0) return null;

  let total = 0;
  for (const member of contributors) {
    total += member.totalAmountDonated;
  }

  return (
    <div className="w-full max-w-4xl" data-testid="sponsors-grid">
      <p className="text-sm text-brand-text-light/60 dark:text-brand-text-dark/60 mb-4">
        {formatCurrency(total)} raised from {contributors.length} contributors
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {contributors.map((member) => (
          <ContributorAvatar key={member.profile} member={member} />
        ))}
      </div>
    </div>
  );
};

const DonateCtaSection = () => (
  <Section title="Built by the community, for the community">
    <FadeIntoView>
      <div className="flex flex-col items-center text-center w-full">
        <p className="text-lg text-brand-text-light/80 dark:text-brand-text-dark/80 mb-8 max-w-2xl">
          GameCI is maintained entirely by volunteers. Your sponsorship funds faster releases, new
          Unity version support, and critical bug fixes. See our{' '}
          <a
            href="https://github.com/orgs/game-ci/projects/4/views/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light dark:text-primary-dark underline hover:no-underline"
          >
            roadmap
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="https://opencollective.com/game-ci"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-filled bg-[#227d5e] dark:bg-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-[#1b6349] dark:hover:bg-[#2fa37d] hover:shadow-lg transition-all"
          >
            Become a sponsor
          </a>
          <a
            href="https://github.com/game-ci"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-[#227d5e] hover:border-[#227d5e] dark:hover:bg-primary-dark dark:hover:border-primary-dark hover:shadow-lg transition-all"
          >
            Contribute on GitHub
          </a>
        </div>

        <p className="text-sm text-brand-text-light/60 dark:text-brand-text-dark/60 mb-8">
          Every dollar goes directly to development time via OpenCollective.
        </p>

        <ContributorGrid />
      </div>
    </FadeIntoView>
  </Section>
);

export default DonateCtaSection;
