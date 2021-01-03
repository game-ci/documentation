import Link from 'next/link';
import NavBar from '@/components/layout/components/nav-bar';
import { Button } from 'antd';
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
    </>
  );
};

export default Index;
