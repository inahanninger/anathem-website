/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureBox from 'components/feature-card-boxes.js';
import Image from './../components/image';
import FlowDiagram from 'assets/flow-diagram.png'
import AppBased from 'assets/icons/noun-computer-and-mobile-phone-4141141.svg'
import Cloud from 'assets/icons/noun-cloud-based-ehr-3989839.svg'
import Infra from 'assets/icons/noun-infrastructure-117239.svg'
import Secure from 'assets/icons/noun-cyber-security-4588330.svg'
import Scalable from 'assets/icons/noun-scalable-computing-4013572.svg'
import Design from 'assets/icons/noun-user-experience-4998781.svg'



const data = [
  {
    id: 1,
    imgSrc: AppBased,
    altText: 'App - Based',
    title: 'App - Based',
    text:
      'Use Anathem on any smartphone or computer with an internet connection.',
    link: '',
  },
  {
    id: 2,
    imgSrc: Cloud,
    altText: 'No hardware required',
    title: 'No hardware required',
    text:
      'Just log in to get started, no need to buy microphone or other hardware.',
    link: '',
  },
  {
    id: 3,
    imgSrc: Infra,
    altText: 'No infrastructure upgrades',
    title: 'No infrastructure upgrades',
    text:
      'Use wifi or mobile phone connection.',
    link: '',
  },
  {
    id: 4,
    imgSrc: Secure,
    altText: 'Safe & Secure',
    title: 'Safe & Secure',
    text:
      'Industry leading cyber security. Compliant with GDPR and Cyber Essentials plus.',
    link: '',
  },
  {
    id: 5,
    imgSrc: Scalable,
    altText: 'Scalable',
    title: 'Scalable',
    text:
      'Easily scalable cloud based solution, for thousands of simultaneous users.',
    link: '',
  },
  {
    id: 6,
    imgSrc: Design,
    altText: 'Intuitive design',
    title: 'Intuitive design',
    text:
      'Allows users to be onboarded through a 45min Computer based training course.',
    link: '',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="EPR Integration"
          title="Cloud Based Software Application"
        />
        <Box sx={styles.box}>
          <Image src={FlowDiagram}/>
        </Box>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureBox
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
              moreLink={item.link}
            />
          ))}
        </Grid>
        {/* <Box sx={styles.bottomHeading}>
          Anathem - Integrates with the 4 leading EPR providers.
        </Box> */}
        <Box sx={styles.bottomHeading}>
      <Heading as="h2" sx={styles.text} variant="title">
      Anathem - AI based voice  solution - designed to save clinicians time and energy.
      </Heading>
      </Box>
      </Container>
    </section>
  );
}

const styles = {
  bottomHeading: {
    px: '20px',
    mx: '50px',
    display: 'block',
    textAlign: 'center',
    fontSize: '36px',
    lineHeight: 1.3,
    fontWeight: 700,
    mt: ['80px', null, null, null, '70px'],

  },
  box: {
    mx: 'auto',
    width: '70%',
    display: 'block',
  },
  grid: {
    pt: [7, null, null, null, null, null, null, 10],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  text: {
    position: 'relative',
    margin: 'auto',
    display: 'block'
  }
};
