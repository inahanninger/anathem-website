import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import Feature from 'sections/feature';
import WorkFlow from 'sections/workflow';
import ProductDetails from './../sections/product-details';
import Partners from 'sections/partners';
import Wave from 'sections/wave';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anathem" />
          <Banner />
          {/* <Wave /> */}
          <KeyFeature />
          <WorkFlow />
          <ProductDetails />
          <Feature />
          {/* <TeamSection/> */}
          {/* <RoadMap/> */}
          {/* <Partners/> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
