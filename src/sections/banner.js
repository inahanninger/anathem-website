/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button, Grid } from 'theme-ui';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';
import Appointment from 'assets/counsellor-patient.jpg';
import Wave from 'assets/wave.svg';
import Wave1 from 'assets/Wave1.png';


const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
];

export default function Banner() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.titleBox}>
      {/* <Box sx={styles.banner.contentBox}> */}
          <Heading as="h1" variant="mainTitle">
            Digital Intelligence for 
            Mental Health Clinicians
          </Heading>
        {/* </Box> */}
      </Container>
      <Grid sx={styles.grid}>
      <Container sx={styles.banner.container}>
      <Box sx={styles.banner.contentBox}>
        <Heading as="h2" variant="heroPrimary">
        Spend more time with patients and less time on admin.
        </Heading>
        <Text as="p" variant="heroSecondary">
        <b>Anathem</b> reduces administration from each appointment by <b>75%</b>.
        <br/>Allowing you to spend more time with your patients, and improve your work-life balance.
        </Text>
        <Flex>
        <Link href="/contact" passHref>
          <Button variant="whiteButton" aria-label="Contact us">
            Contact us
          </Button>
          </Link>
          <>
            {/* <Button
              variant="textButton"
              aria-label="Book a demo"
              onClick={handleClick}
            >
              <FaPlayCircle /> Book a demo
            </Button> */}
          </>
        </Flex>
      </Box>    
      </Container>
      <Box sx={styles.banner.imageBox}>
        <Image src={Appointment} alt="banner"/>
      </Box>

      </Grid>
    {/* <Container sx={styles.waveContainer}>
      <Box sx={styles.wave}>
      <Heading as="h2" sx={styles.waveText} variant="title">
      Anathem - AI based voice solution - designed to save clinicians time and energy.
      </Heading>
      </Box>
      </Container> */}
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    pt: '120px',
    pb: '80px',
    titleBox: {
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      textAlign: 'center',
      mb: ['50px', '-10px', null, null, '-10px', '-10px' ],
    },
    container: {
      display: 'flex',
      backgroundImage: `url(${BannerBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'top left',
      backgroundSize: 'cover',
      backgroundColor: 'primary',
      position: 'relative',
      justifyContent: 'right',
    },
    contentBox: {
      width: ['80%', null, '85%', '95%', '90%', '80%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [8, 7, null, null, null, 5, 8, 8],
      pb: [7,null,4, 4, 4],
      margin: 'auto',
    },
    imageBox: {
      display: ['flex', null, null, 'flex'],
      justifyContent: 'left',
      margin: 'auto',
      overflow: 'hidden',
      width: '100%',
      objectFit: 'cover'
    },
  },
  waveContainer: {
    objectFit: 'cover',
    position: 'relative',
    margin: 'auto',
    justifyContent: 'center',
    display: 'flex',
    mt: '60px',
    height: 'auto'
  },
  wave: {
    position: 'relative',
    display: ['none', null, null, 'flex'],
    width: '90%',
    textAlign: 'center',
    backgroundImage: `url(${Wave1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 'auto',
    // mb: '-70px',
    maxWidth: '100%',
    minWidth: '2050px'
    },
    waveText: {
      position: 'relative',
      margin: 'auto',
      py: ['80px',null, '90px'],
    },
    grid: {
      display: 'grid',
      maxWidth: '2300px',
      mb: -1,
      gridGap: 0,
      gridTemplateColumns: [
        'auto',
        'auto',
        'repeat(2,1fr)'
      ],
      margin: 'auto'
    },
};
