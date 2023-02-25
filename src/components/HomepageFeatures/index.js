import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Game Docs</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        Find documentation on some of the games we host to help you out
      </Translate>
    ),
  },
  {
    title: <Translate>Wolf says hi</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
      Say hello back to wolf
      </Translate>
    ),
  },
  {
    title: <Translate>API Docs</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Documentation for developers who are looking to use our API
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
