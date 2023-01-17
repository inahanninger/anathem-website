/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import Logo from 'components/logo';
import AnathemLogo from 'assets/Anathem_logo_4.jpg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import data from './header.data';
import Sticky from 'react-stickynode';
import { useState } from 'react';
import { NavLink} from 'components/link';
import Link from 'next/link';


export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header sx={styles.header} 
        className={state.isSticky ? 'is-sticky' : ''} 
        id="header">
        <Container sx={styles.container}>
          <Logo isSticky={state.isSticky} sx={styles.logo}
                src={AnathemLogo} 
          />
          {/* <Flex as="nav" sx={styles.nav}> */}
          <nav as="nav" sx={styles.nav}>
              {data.menuItems.map(({ path, label }, i) => (
                <NavLink
                  key={i}
                  path={path}
                  label={label}
                  className={state.isSticky ? 'is-sticky' : 'is-sticky'}
                />
              ))}
            </nav>
            {/* {data.menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))} */}
          {/* </Flex> */}

          <Link href="/contact" passHref>
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Contact Anathem"
            path            
          >
            Contact Anathem
          </Button>
          </Link>
          <MobileDrawer />
        </Container>
      </header>
      </Sticky>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  logo: {
    display: 'flex',
    objectFit: 'cover',
  },
  header: {
    color: 'white',
    fontWeight: 'normal',
    py: 2,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      display: 'none',
      '@media screen and (min-width: 1024px)': {
        display: 'block',
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    pl: '30px',
    mx: 'auto',
    color: 'main',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 30,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary',
      },
    },
  },
};
