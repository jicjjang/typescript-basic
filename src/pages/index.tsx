import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomeFeatures from "@site/src/components/home/features";
import HomeHeader from "@site/src/components/home/header";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.customFields.description as string}>
      <HomeHeader />
      <main>
        <HomeFeatures />
      </main>
    </Layout>
  );
}
