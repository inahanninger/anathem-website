/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import Wave1 from 'assets/Wave1.png';



export default function WaveSection() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.wave}>
      <Heading as="h2" sx={styles.text} variant="title">
      Anathem - AI based voice  solution - designed to save clinicians time and energy.
      </Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    pt: ['150px', null, null, null, null, null, '140px', '10px'],
    pb: ['100px', null, null, '110px', null, 10, '40px'],
    maxWidth: '2700px',
    titleBox: {
      justifyContent: 'center',
      overflow: 'hidden'
    }
  },
  wave: {
    position: 'relative',
    display: ['none', 'none', 'flex'],
    width: '90%',
    textAlign: 'center',
    backgroundImage: `url(${Wave1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 'auto',
    maxWidth: '100%'
    },
  text: {
    position: 'relative',
    margin: 'auto',
    py: '55px'
  }
};
