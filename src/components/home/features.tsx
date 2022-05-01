import React from "react";
import clsx from "clsx";

import featureList, { mainFeature, IFeatureItem } from "@site/src/constants";

import styles from "./features.module.scss";

function Feature({ title, colSize = 4, description }: IFeatureItem & { colSize?: number }) {
  return (
    <div className={clsx(`col col--${colSize}`)}>
      <div className="text--left padding-horiz--md">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function HomeFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row margin-top--lg margin-bottom--lg">
          <div className="col col--12">
            <Feature {...mainFeature} colSize={12} />
          </div>
        </div>
        <div className="row margin-top--lg margin-bottom--lg">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} colSize={4} />
          ))}
        </div>
      </div>
    </section>
  );
}
