import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  external?: boolean;
  image?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Virtues',
    link: "./docs/virtues",
    Svg: require('@site/static/images/3virtues2.svg').default,
    // image: "/book_en/cover1.png",
    description: (
      <>
        What exactly are virtues? Full definition.
      </>
    ),
  },
  {
    title: 'The Relations between Principles and Virtues',
    link: "./docs/principles",
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Ethical and Moral Principles.
      </>
    ),
  },
  {
    title: 'Hierarchies',
    link: "./docs/hierarchies",
    Svg: require('@site/static/images/Virtues2.svg').default,
    description: (
      <>
        Hierarchy. Links with Knowledge Domains. Concerning Law. Chakras.
      </>
    ),
  },
  {
    title: 'Scenarios',
    link: "./docs/scenarios",
    Svg: require('@site/static/images/Virtues2.svg').default,
    description: (
      <>
        Hierarchy. Links with Knowledge Domains. Concerning Law. Chakras.
      </>
    ),
  },
  {
    title: 'Reduction of Virtues to 3 Moral Concepts',
    link: "./docs/2trinity",
    Svg: require('@site/static/images/3concepts.svg').default,
    description: (
      <>
        The 3 Moral Concepts. Across cultures and religions.
      </>
    ),
  },
  {
    title: 'Reduction of Virtues to 1 Concept',
    link: "./docs/1concept",
    Svg: require('@site/static/images/entropy.svg').default,
    description: (
      <>
        Entropy Control. Influences.
      </>
    ),
  },
];

function Feature({title, link, external, Svg, image, description}: FeatureItem) {
  const txt = (<><div className="text--center">
      {Svg ? <Svg className={styles.featureSvg} role="img" /> : <img
        src={image}
        alt={title}
        className={styles.featureSvg}
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      />}
    </div>
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div></>)
  const lnk = external ?
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.featureLink}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >{txt}</a>
    : <Link
        to={link}
        className={styles.featureLink}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {txt}
      </Link>
  return (
    <div className={clsx('col col--4')}>
      {lnk}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

