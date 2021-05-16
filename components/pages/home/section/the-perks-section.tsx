import Section from '@/components/pages/home/section/section';
import FadeIntoView from '@/components/reusable/animations/fade-into-view';
import React from 'react';
import { Typography, Card, Col, Row } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const cards = [
  {
    title: 'Free for everyone, forever',
    content: (
      <p>
        We believe that for most individuals and game companies, CI is{' '}
        <strong>not the core-business</strong>. And that it is in everybody&apos;s interest to
        combine their knowledge and create a solution that is accessible for everyone.
      </p>
    ),
  },
  {
    title: 'Beginner-friendly',
    content: (
      <p>
        We have a strong focus on being beginner-friendly. GameCI is offering{' '}
        <strong>friendly functional APIs</strong>, that does not require much technical knowledge to
        configure. Making customisations is easily done by forking our projects, giving much{' '}
        <strong>flexibility</strong>.
      </p>
    ),
  },
  {
    title: 'Proactive community',
    content: (
      <p>
        GameCI is built by industry professionals across the globe. Please feel free to{' '}
        <strong>
          join us on <a href="/discord">Discord</a>
        </strong>{' '}
        and have a chat!
      </p>
    ),
  },
  {
    title: 'Proven technologies',
    content: (
      <>
        <p>
          Our build stack is built on top of docker and official game engine standards. We follow{' '}
          <strong>industry best practices</strong> where applicable and build with very large scale
          in mind.
        </p>

        <p>
          This combination makes that we offer a solid basis for{' '}
          <strong>enterprise-grade capability</strong>.
        </p>
      </>
    ),
  },
  {
    title: 'Clear documentation',
    content: (
      <p>
        Our documentation can be edited directly on GitHub, making it easy to fix mistakes or update
        to the latest standards. Because of the <strong>community</strong>, docs always have a
        certain level of completeness. Can&apos;t find what you&apos;re looking for? Just ask.
      </p>
    ),
  },
  {
    title: 'Production ready',
    content: (
      <>
        <p>
          Companies both large and small use GameCI to test and build their production application
          as part of their daily workflows.
        </p>

        <p>
          Use the CI system and cloud provider you love.{' '}
          <strong>No need to switch technologies</strong>. On-prem? Self-hosted runners? Not a
          problem either.
        </p>
      </>
    ),
  },
];

const ThePerksSection = () => {
  const column = { xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl: 8 };
  return (
    <Section className={styles.thePerksSection}>
      <Title level={2} className={styles.title}>
        The perks of GameCI
      </Title>

      <Row gutter={[24, 16]} align="stretch" justify="space-around">
        {cards.map((card, index) => (
          <Col {...column}>
            <FadeIntoView className={styles.cardAnimator} delay={index * 100}>
              <Card
                className={styles.card}
                title={
                  <Title level={4} className={styles.cardTitle}>
                    {card.title}
                  </Title>
                }
              >
                {card.content}
              </Card>
            </FadeIntoView>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default ThePerksSection;
