import React from 'react';
import { ThemeProvider, Grid, Image, Box, Heading, Text, Link } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mike from 'assets/team/OsborneMike05-modified.png';
import { FaInstagram, FaLinkedinIn, FaHome, FaTwitter } from 'react-icons/fa';
import { Container } from '@nextui-org/react';


export default function TeamPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anathem Team" />
          {/* <MainTitle /> */}
          <Container sx={styles.container}>
          <Grid sx={styles.grid}>
          <Box sx={styles.card}>
      <Image src={Mike} sx={styles.memberThumb} />
      <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          Professor Michael Osborne
        </Heading>
        <Text className="info__designation" >
          Advisor
        </Text>
      </Box>
      <Box sx={styles.socialShare} className="social__share">
          <Link  href='https://www.robots.ox.ac.uk/~mosb/' >
            <FaHome />
          </Link>
          <Link  href='https://www.linkedin.com/in/michael-a-osborne-176895a4/' >
            <FaLinkedinIn />
          </Link>
          <Link  href='https://twitter.com/maosbot' >
            <FaTwitter />
          </Link>
      </Box>
    </Box>
        <Box>
          <Text sx={styles.text}>
          Mike Osborne is an Oxford University Professor of Machine Learning. He has expertise in active learning, Gaussian processes, 
          Bayesian optimisation, and Bayesian quadrature, and is a pioneer of the emerging field of probabilistic numerics.
          Mike’s work on the societal impacts of machine
          learning and robotics has been cited over 10,000
          times, and has resulted in both sustained coverage in
          almost all major media venues (i.e. BBC Newsnight, a
          cover feature in the Economist) and policy impact
          (oral presentation to the UK House of Commons
          Science and Technology Committee).          
        </Text>
        </Box>
        </Grid>
        </Container>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const styles = {
  text:{
    py: ['50px','100px'],
    px: ['20px','60px'],
    justifyContent: 'center',
  },
  container: {
    m: '100px',
    pb: '300px'
  },
  grid: {
    mb: 5,
    pt: '100px',
    gridGap: 4,
    gridTemplateColumns: ['auto', '1fr 3fr']
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 7],
    px: [2, null, 6, 5],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      bg: 'light_blue',
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary',
      },
      '.info__designation': {
        color: 'primary',
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },

  memberThumb: {
    width: ['120px', '120px', '100px', null, null, '260px'],
    height: ['120px', '120px', '100px', null, null, '260px'],
    flexShrink: 0,
    // border: '1px solid',
    // borderColor: 'grey',
    borderRadius: '50%',
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1,
      px:5
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s',
    },
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 1],
    // pt: 2,
    py:4,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '2px'],
      px: 1,
      transition: 'all 0.25s',
      color: ['primary', null, 'text'],
    },
  },
}
