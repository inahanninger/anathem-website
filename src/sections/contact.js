/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PatternBG from 'assets/patternBG.png';
import ContactForm from 'components/contact-form';


export default function ContactSection() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <Grid sx={styles.grid}>
        <Box>
          <Heading as="h2" variant="heroPrimary">
          Contact us
          </Heading>
          <Text as="p" variant="heroSecondary">
          With Anathem:
          <ul>
              <li>Reduce administration from each appointment by 75%.</li>
              <li>Reduce clinician burnout.</li>
              <li>Improve quality.</li>
        </ul>  
          </Text>
        </Box>
        <ContactForm/>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 8],
    mt: 3,
  
  },
  grid: {
    mb: -1,
    pt: 2,
    gridGap: [
      '35px 0',
      null,
      '45px 50px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)'
    ],
  },
};
