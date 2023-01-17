/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Image, Box, Heading, Text, Link as A } from 'theme-ui';
import Link from 'next/link';
import Play from 'assets/icons/play';

export default function FeatureBox({
  src,
  altText = 'default alt text',
  title,
  text,
  moreLink,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper} >
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        {/* <Link href={moreLink}>
          <A sx={styles.learnMore}>
            <span>Learn More</span> <Play width={14} height={14} />
          </A>
        </Link> */}
      </Box>
    </Box>
  );
}

const styles = {
  learnMore: {
    color: 'primary',
    cursor: 'pointer',
    fontSize: [1, null, null, '13px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'baseline',
    textDecoration: 'none',
    letterSpacing: 1,
    lineHeight: 1,
    textTransform: 'uppercase',
    mt: 4,
    svg: {
      ml: 2,
    },
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    bg: 'light_blue',
    mx: '10px',
    px: '30px',
    pt: '40px',
    pb: '40px',
    borderRadius: 7,
  },

  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.1,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.75, null, 1.9],
    },
  },
};
