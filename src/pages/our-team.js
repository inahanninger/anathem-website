import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import TeamSection from 'sections/team-section';
import MainTitle from 'sections/main-title';


export default function TeamPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anathem Team" />
          <MainTitle />
          <TeamSection/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
