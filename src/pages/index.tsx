import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import StructuredData from '@site/src/components/StructuredData';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            enter
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  // Structured data for the main website (for SEO and AI agents)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'On Virtues',
    'url': 'https://virtues.provable.dev',
    'description': 'A comprehensive guide to virtues including Faith, Charity, Hope, Prudence, Justice, Temperance, Fortitude, and their philosophical foundations.',
    'publisher': {
      '@type': 'Organization',
      'name': 'The Laurel Project',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://virtues.provable.dev/img/logo.svg'
      }
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://virtues.provable.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'The Laurel Project',
    'url': 'https://virtues.provable.dev',
    'logo': 'https://virtues.provable.dev/img/logo.svg',
    'sameAs': [
      'https://github.com/ctzurcanu/virtues'
    ]
  };

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive guide to virtues including Faith, Charity, Hope, Prudence, Justice, Temperance, Fortitude, and their philosophical foundations. Explore virtue ethics, moral philosophy, and ethical frameworks.">
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
