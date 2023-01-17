/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Speed from 'assets/key-feature/speed.svg';
import Mic from 'assets/key-feature/microphone.png';
import Record from 'assets/key-feature/contact.png';
import Services from 'assets/key-feature/services.png';

const data = [
  {
    id: 1,
    imgSrc: Record,
    altText: 'Vector',
    title: 'Personal Record Intelligence',
    text:
    'Seamlessly summarise patient records from existing electronic patient record systems.It will be the first system to allow a clinician to prepare for a patient consultation in minutes, not hours.'  
  },
  {
    id: 2,
    imgSrc: Mic,
    altText: 'Patient Consultation Audio Processing',
    title: 'Patient Consultation Audio Processing',
    text:  'Eliminate repetitive note taking during patient consultations by offering a transcription service to clinician-patient consultations. Allow for a clinician to summarise key consultation attributes and automate the first draft of a referral letter.'
  },
  {
    id: 3,
    imgSrc: Services,
    altText: 'Automation of EPR Admin',
    title: 'Automation of EPR Admin',
    text:
    'Linking into existing Electronic Patient Record (EPR) systems, Anathem will provide AI enabled suggestions for Risk Assessments and other clinical assessment tools. Works together with the clinician to ensure critical fields are not overlooked, providing better patient outcomes.'
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Our Solution"
          title="Anathem's Features"
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
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
