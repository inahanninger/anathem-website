import React from 'react';
import { ThemeProvider, Container, Box, Text } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainTitle from '../sections/main-title';
import SectionHeader from '../components/section-header';
import PatternBG from 'assets/patternBG.png';


export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="About Anathem" />
          <MainTitle/>
          <Container sx={styles.background}>
            <SectionHeader
              slogan="About Us"
              title="Background"
            />
            <Box>
              <Text variant='heroSecondaryGrey'>
              Anathem is born out of Dr Guy Northover and Richard Apletree’s passion to provide greater access to mental health services for all. <br/>
              <br/> Guy’s personal experiences as a psychiatrist at a local and national level, reinforces the role technology can play as a key enabler to allow clinicians to spend more time with patients.
              </Text>
            </Box>
          </Container>
          <Container sx={styles.mission}>
          <SectionHeader
              slogan="Our goals"
              title="Anathem's Mission"
              isWhite= {true}
            />
            <Box>
              <Text variant='heroSecondaryWhite' sx={styles.missionText}>
              To increase patient facing time for mental health clinicians, while improving their job satisfaction and quality. <br/>
              <br/> By... <br/>
              <b>Removing</b> the Clinician from the administrative burden associated with their work.
              <br/>
              <br/> Through... <br/>
              The use of AI to <b>contextualise</b> patient records and consultations to empower clinicians to make better decisions, faster.
              </Text>
            </Box>
          </Container>
      </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const styles = {
  background: {
    py: [2, null, null, 9],
    px: ['10px', null, null, '50px'],
  },
  mission: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 8],
    px: ['10px', null, null, '50px'],
    mt: 5,
    mb: 10
  },
  missionText: {
    px: '50px'
  }
}
