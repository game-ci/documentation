import React from 'react';

import Logo from '../../../images/discord-brand-logo-wordmark.svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DiscordLogo = React.forwardRef((props, reference) => {
  return <Logo {...props} height={30} style={{ verticalAlign: '-0.75em' }} />;
});

export default DiscordLogo;
