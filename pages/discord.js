import redirect from '@/core/routing/redirect';
import LoadingText from '@/components/layout/main/loading-text';
import useRedirect from '@/core/routing/use-redirect';

const discordUrl = 'https://discord.gg/WyPN5r9';

const Discord = () => {
  useRedirect(discordUrl);

  return <LoadingText>Redirecting to Discord...</LoadingText>;
};

Discord.getInitialProps = (context) => redirect(context, discordUrl);

export default Discord;
