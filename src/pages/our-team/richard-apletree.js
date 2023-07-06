import React from 'react';
import { ThemeProvider, Grid, Image, Box, Heading, Text, Link } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Richard from 'assets/team/richard-modified.png';
import { FaInstagram, FaLinkedinIn, FaHome} from 'react-icons/fa';
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
      <Image src={Richard} sx={styles.memberThumb} />
      <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          Richard Apletree
        </Heading>
        <Text className="info__designation" >
          Co-Founder and CEO
        </Text>
      </Box>
      <Box sx={styles.socialShare} className="social__share">
          <Link  href='https://www.linkedin.com/in/richard-apletree-a575a99/' >
            <FaLinkedinIn />
          </Link>
      </Box>
    </Box>
        <Box>
          <Text sx={styles.text}>
          Richard is an experienced CFO, CRO and CEO. CFO of giffgaff for 7 years growing from £100k p.a. revenue to £400m p.a. CEO of giffgaff’s financial services arm. 
          Since 2019, he has served as CFO of Mind Foundry an AI spinout from Oxford University working on "high stakes" AI applications, more recently contemporaneously holding the CRO position.
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
    gridGap: 3,
    gridTemplateColumns: ['auto', '1fr 3fr']
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    // px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
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
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      color: ['primary', null, 'text'],
    },
  },
}
