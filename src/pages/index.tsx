import React from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const VideoEmbed: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="640"
        height="402"
        src="https://www.loom.com/embed/2575ee0a255c4e04bcd0d64c5266d94c?sid=d3ef2d96-3cf4-4663-bcfc-7e2797ae5feb"
        allow="fullscreen; webkitallowfullscreen; mozallowfullscreen"
        allowFullScreen
        title="Loom Video"
      ></iframe>
    </div>
  );
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.videoHeading}>
          <h3 className={styles.textForVideo}>Watch the Magic Loops Overview</h3>
          </div>
        <VideoEmbed />
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.buttonMargin}`}
            to="/docs/loops">
            More Tutorials
          </Link>
        </div>
      </main>
    </Layout>
  );
}
