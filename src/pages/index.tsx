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
      'https://github.com/ctzurcanu/virtues',
      'https://x.com/ctzurcanu'
    ]
  };

  // Helps AI agents and search engines understand the full content catalog
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Virtues Framework',
    'description': 'A systematic framework of 21 virtues organized into supreme, cardinal, and natural categories.',
    'numberOfItems': 21,
    'itemListElement': [
      {'@type': 'ListItem', 'position': 1, 'name': 'Miracle', 'url': 'https://virtues.provable.dev/docs/miracle', 'description': 'Proof beyond reason and transcendent truth'},
      {'@type': 'ListItem', 'position': 2, 'name': 'Order', 'url': 'https://virtues.provable.dev/docs/order', 'description': 'Provable Order and Hierarchy'},
      {'@type': 'ListItem', 'position': 3, 'name': 'Faith & Reason', 'url': 'https://virtues.provable.dev/docs/reason/', 'description': 'Belief, rational demonstration, and logos'},
      {'@type': 'ListItem', 'position': 4, 'name': 'Economy', 'url': 'https://virtues.provable.dev/docs/economy', 'description': 'Managing goodness and resources wisely'},
      {'@type': 'ListItem', 'position': 5, 'name': 'Charity', 'url': 'https://virtues.provable.dev/docs/charity', 'description': 'Efforts for the benefit of others'},
      {'@type': 'ListItem', 'position': 6, 'name': 'Goodness', 'url': 'https://virtues.provable.dev/docs/goodness', 'description': 'Sacrifice, Courage, and Civilization'},
      {'@type': 'ListItem', 'position': 7, 'name': 'Hope', 'url': 'https://virtues.provable.dev/docs/hope', 'description': 'Will to evolve and capacity for growth'},
      {'@type': 'ListItem', 'position': 8, 'name': 'Harmony', 'url': 'https://virtues.provable.dev/docs/harmony', 'description': 'Generosity, Humility, and Gratitude'},
      {'@type': 'ListItem', 'position': 9, 'name': 'Prudence', 'url': 'https://virtues.provable.dev/docs/prudence', 'description': 'Practical wisdom and strategic thinking'},
      {'@type': 'ListItem', 'position': 10, 'name': 'Forgiveness', 'url': 'https://virtues.provable.dev/docs/forgiveness', 'description': 'Repentance, mercy, and reconciliation'},
      {'@type': 'ListItem', 'position': 11, 'name': 'Justice', 'url': 'https://virtues.provable.dev/docs/justice', 'description': 'Righteousness and fairness in judgment'},
      {'@type': 'ListItem', 'position': 12, 'name': 'Governance', 'url': 'https://virtues.provable.dev/docs/governance', 'description': 'Leadership and organizing toward common goals'},
      {'@type': 'ListItem', 'position': 13, 'name': 'Temperance', 'url': 'https://virtues.provable.dev/docs/temperance', 'description': 'Self-governance and moderation'},
      {'@type': 'ListItem', 'position': 14, 'name': 'Fairness', 'url': 'https://virtues.provable.dev/docs/fairness', 'description': 'Equitable conditions and impartiality'},
      {'@type': 'ListItem', 'position': 15, 'name': 'Fortitude', 'url': 'https://virtues.provable.dev/docs/fortitude', 'description': 'Willpower, courage, and perseverance'},
      {'@type': 'ListItem', 'position': 16, 'name': 'Competition', 'url': 'https://virtues.provable.dev/docs/competition', 'description': 'Healthy rivalry and striving for excellence'},
      {'@type': 'ListItem', 'position': 17, 'name': 'Measurability', 'url': 'https://virtues.provable.dev/docs/measurability', 'description': 'Objective assessment and reality perception'},
      {'@type': 'ListItem', 'position': 18, 'name': 'Market', 'url': 'https://virtues.provable.dev/docs/market', 'description': 'Transparent exchange and commerce'},
      {'@type': 'ListItem', 'position': 19, 'name': 'Abundance', 'url': 'https://virtues.provable.dev/docs/abundance', 'description': 'Wealth, vital energy, and prosperity'},
      {'@type': 'ListItem', 'position': 20, 'name': 'Industriousness', 'url': 'https://virtues.provable.dev/docs/industriousness', 'description': 'Hard work, diligence, and productive effort'},
      {'@type': 'ListItem', 'position': 21, 'name': 'Survival', 'url': 'https://virtues.provable.dev/docs/survival', 'description': 'Life, health, and self-preservation'},
    ]
  };

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive guide to virtues including Faith, Charity, Hope, Prudence, Justice, Temperance, Fortitude, and their philosophical foundations. Explore virtue ethics, moral philosophy, and ethical frameworks.">
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={itemListSchema} />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
