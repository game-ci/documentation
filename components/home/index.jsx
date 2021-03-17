import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import Banner from '@/components/home/banner';
import Section1 from '@/components/home/section1';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';
import GameCiLogo from 'assets/images/game-ci-brand-logo-wordmark.svg';

const Home = () => (
  <>
    <p align="center">
      <GameCiLogo height="500" width="500" />
    </p>
    <p align="center">
      <Button>
        <Link href="/docs/github/getting-started">I use Github</Link>
      </Button>
      <Button>
        <Link href="/docs/gitlab/getting-started">I use Gitlab</Link>
      </Button>
    </p>

    <Banner isMobile={false} />
    <Section1 isMobile={false} />
    <Section2 isMobile={false} />
    <Section3 />
  </>
);

export default Home;
