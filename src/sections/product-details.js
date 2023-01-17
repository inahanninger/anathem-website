/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Time from 'assets/icons/noun-time-5342996.svg'
import Doctor from 'assets/icons/noun-doctor-925923.svg'
import Documentation from 'assets/icons/noun-approved-document-4576098.svg'
import Graph from 'assets/icons/noun-graph-4719153.svg'

const data = [
  {
    id: 1,
    imgSrc: Time,
    altText: 'Increased efficiency & capacity.',
    title: 'Increased efficiency & capacity.',
    text:
    'Anathem will reduce documentation time by 75%, allowing clinicians more patient facing time.'  
  },
  {
    id: 2,
    imgSrc: Doctor,
    altText: 'Increase clinician satisfaction & retention.',
    title: 'Increase clinician satisfaction & retention.',
    text:  'Clinicians have less administrative burden and fewer symptoms of burnout, helping them stay in practice longer.'  
  },
  {
    id: 3,
    imgSrc: Documentation,
    altText: 'Higher-documentation quality.',
    title: 'Higher-documentation quality.',
    text:
    'Anathem will enable accurate collection of patient level and process data without additional clinician burden driving quality improvement at service and trust level.'
  },
  {
    id: 4,
    imgSrc: Graph,
    altText: 'ROI Positive quickly',
    title: 'ROI Positive quickly',
    text:
    'At a cost of £120/clinician per month, just 1 additional appointment per month will mean that Anathem pays for itself.'
  },
];

export default function ProductDetails() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Product Details"
          title="Anathem Assistant"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
      null,
      'repeat(4,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
