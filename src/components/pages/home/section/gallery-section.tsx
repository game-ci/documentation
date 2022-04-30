import Section from '@site/src/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const GallerySection = () => (
  <Section className={styles.gallerySection}>
    <Title level={2}>Gallery with pipelines and such (WIP)</Title>
  </Section>
);

export default GallerySection;
