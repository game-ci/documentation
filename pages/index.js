import Link from 'next/link';
import NavBar from '@/components/layout/components/nav-bar';
import { Button } from 'antd';
import React from 'react';

import Banner from '@/components/home/banner';
import Page1 from '@/components/home/page1';
import Page2 from '@/components/home/page2';
import Page3 from '@/components/home/page3';
import Footer from '@/components/home/footer';
import GameCiLogo from '../images/game-ci-brand-logo-wordmark.svg';

const Index = () => {
  return (
    <>
      <NavBar />

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
      <Page1 isMobile={false} />
      <Page2 isMobile={false} />
      <Page3 />
      <Footer />
    </>
  );
};

export default Index;
