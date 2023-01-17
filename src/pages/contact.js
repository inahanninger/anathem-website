import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainTitle from './../sections/main-title';
import ContactSection from 'sections/contact';


export default function ContactPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Contact Anathem" />
          <MainTitle/>
          <ContactSection/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
