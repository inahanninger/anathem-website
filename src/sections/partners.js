/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Container, Box, Flex, Image, Grid } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import NHSBerkshire from 'assets/nhs-berkshire.svg'
import TheHill from 'assets/theHill.jpg'
import Oxford from 'assets/oxford.png'


const partners = {
  Institutions: [
    {
      id: 1,
      source: TheHill,
      alt: "The Hill"
    },
    {
      id: 2,
      source: NHSBerkshire,
      alt: "NHS Berkshire"
    },
    {
      id: 3,
      source: Oxford,
      alt: "Oxford Uni"
    }
  ],
  Tech: [
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Partners() {
  const { Institutions, Tech } = partners;
  const [state, setState] = useState({
    active: 'Institutions',
    partners: Institutions,
  });

  const handleToggle = (view) => {
    if (view === 'Tech') {
      setState({
        ...state,
        active: 'Tech',
        partners: Tech,
      });
    } else {
      setState({
        ...state,
        active: 'Institutions',
        partners: Institutions,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan="Our Partners"
          title="In collaboration with..."
        />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'Institutions' ? 'active' : ''}
              type="button"
              aria-label="Institutions"
              onClick={() => handleToggle('Institutions')}
            >
              Institutions
            </button>
            <button
              className={state.active === 'Tech' ? 'active' : ''}
              type="button"
              aria-label="Tech"
              onClick={() => handleToggle('Tech')}
            >
              Tech
            </button>
          </Box>
        </Flex>
        <Box sx={styles.partnerWrapper} className="partner__wrapper">
          
        <Grid sx={styles.grid}>
          {state.partners.map((partnerData) => (
            <Box sx={styles.card}>
            <Image sx={styles.img} 
              key={`${state.active}-card--key${partnerData.id}`}
              src={partnerData.source}
              altText={partnerData.alt}
            />
            </Box>
          ))}
        </Grid>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  img: {
    width: ['90%', null, null, null, '55px', '70px', null, '100%'],
    maxHeight: '95px',
    flexShrink: 3,
    objectFit: 'cover',
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  partnerWrapper: {
    mb: '60px',
    mt: '60px',
    mx: 3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
  grid: {
    aspectRatio: 2,
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '90%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
