export default {
  // example colors with dark mode
  colors: {
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    heading: '#244886', // primary heading color
    heading_secondary: '#0F2137', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E5ECF4', // border color
    primary: '#1F21D6', 
    pale_primary: '#1F3E76', // primary button and link color
    secondary: '#343D48', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    yellow: '#F6C416',
    main: '#1F3E76',
    blackish: '#0F2137', //Same as heading
    light_blue: '#E0E9F6',

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
    subheading: " 'Plus Jakarta Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        '100%',
        null,
        null,
        '780px',
        '1020px',
        '1200px',
        null,
        '1310px',
      ],
      px: [4, 6],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  section: {
    keyFeature: {
      py: [8, null, 9, null, null, 10],
    },
    feature: {
      py: [8, null, 9, null, null, 10],
    },
    partner: {
      pt: [2, null, null, 5],
      pb: [8, null, 9, null, null, 10],
    },
    testimonial: {
      py: [8, null, 9, null, null, 10],
      overflow: 'hidden',
    },
    securePayment: {
      overflow: 'hidden',
      position: 'relative',
      pt: 9,
    },
    faq: {
      py: [8, null, 9, null, null, 10],
    },
  },
  sectionHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -1,
    marginBottom: ['50px', null, '60px', null, '65px', '75px'],
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, 1.2],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
    },

    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: '8px',
      lineHeight: 1.5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    mainTitle: {
      color: 'greyish',
      fontSize: ['40px', '48px', '48px', '48px', '60px'],
      lineHeight: 1.2,
      fontWeight: 700,
      mb: ['50px', '40px', '40px', '40px', '60px'],
      textAlign: 'center',
      maxWidth: '900px',
      margin: 'auto',
    },
    heroPrimary: {
      color: 'white',
      fontSize: ['30px','30px', '20px', '20px', '30px', '40px','44px'],
      lineHeight: 1.2,
      fontWeight: 700,
      mb: [5, null, null, '10px', '24px', '40px'],
    },
    heroSecondary: {
      color: 'white',
      fontSize: ['12px', '12px', '11px', '11px', '14px', '18px'],
      lineHeight: [1.2, null, null, null, 1.3, 1.3],
      fontWeight: 'body',
      // pr: [0, null, null, null, null, '100px', null, '125px'],
      mb: ['25px', null, null, null, '30px', null, null, 7],
    },
    heroSecondaryWhite: {
      color: 'white',
      fontSize: [2, 3, 4, '17px', null, 3, '19px', 6],
      lineHeight: [1.1, null, null, null, 1.3],
      fontWeight: 'body',
      px: '40px',
      mb: ['35px', null, null, null, '40px', null, null, 5],
    },
    heroSecondaryGrey: {
      color: 'greyish',
      fontSize: [2, 3, 4, '17px', null, 3, '19px', 6],
      lineHeight: [1.1, null, null, null, 1.3],
      fontWeight: 'body',
      px: '40px',
      mb: ['35px', null, null, null, '40px', null, null, 5],
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: '30px',
      // color: '#0F2137',
      color: 'main',
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    default: {
      cursor: 'pointer',
    },
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
    logo: {
      display: 'flex',
      height: 'auto',
      maxWidth: ['60%', '50%', '40%', '30%', '20%', '20%', '20%']    
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['12px', '12px', null, '11px', '13px', '16px'],
      letterSpacings: ['-0.5px', null, null, null, '-0.15px'],
      padding: ['11px 20px 10px', null, null, '11px 20px 10px', '13px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.1,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
      },
    },
    blueButton: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'main',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      },
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      },
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      fontWeight: 'bold',
      border: '2.1px solid',
      borderColor: 'primary',
      backgroundColor: 'transparent',
      color: 'primary',
      '&:hover': {
        bg: 'primary',
        color: 'white',
      },
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      '.modal-video-close-btn': {
        cursor: 'pointer',
        top: '-25px',
        right: '-25px',
        width: ' 25px',
        height: '25px',
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto',
      },
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
