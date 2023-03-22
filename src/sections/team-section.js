/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaTwitter, FaMedium, FaLinkedinIn, FaHome, FaGithub } from 'react-icons/fa';

import Member1 from 'assets/team/richard-modified.png';
import Member2 from 'assets/team/guy-modified.png';
import Member3 from 'assets/team/ina-modified.png';
import Member4 from 'assets/team/mark-modified.png';
import Member5 from 'assets/team/OsborneMike05-modified.png';
import Member6 from 'assets/team/daniel-modified.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Richard Apletree',
    title: 'Richard Apletree',
    designation: 'Co-Founder and CEO',
    path: '/our-team/richard-apletree',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: '/our-team/richard-apletree',
        icon: <FaHome/>,
      },
      {
        id: 2,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/richard-apletree-a575a99/',
        icon: <FaLinkedinIn />,
      }
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Dr Guy Northover',
    title: 'Dr Guy Northover',
    designation: 'Co-Founder',
    path: '/our-team/guy-northover',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: '/our-team/guy-northover',
        icon: <FaHome/>,
      },
      {
        id: 3,
        name: 'twitter',
        path: 'https://twitter.com/guynorthover',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/guy-northover-bb216819/',
        icon: <FaLinkedinIn />,
      }
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Ina Hanninger',
    title: 'Ina Hanninger',
    designation: 'Co-Founder and CTO',
    path: '/our-team/ina-hanninger',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: '/our-team/ina-hanninger',
        icon: <FaHome/>,
      },
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/inahanninger',
        icon: <FaGithub/>,
      },
      {
        id: 2,
        name: 'medium',
        path: 'https://medium.com/@inahanninger',
        icon: <FaMedium />,
      },
      {
        id: 3,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/ina-hanninger-b85216127/',
        icon: <FaLinkedinIn />,
      }
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Mark Davison',
    title: 'Mark Davison',
    designation: 'Advisor',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: '/our-team/mark-davison',
        icon: <FaHome/>,
      },
      {
        id: 2,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/mark-davison-3b672a34/',
        icon: <FaLinkedinIn />,
      }
    ],
    path: '/our-team/mark-davison',
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Professor Michael Osborne',
    title: 'Professor Michael Osborne',
    designation: 'Advisor',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: 'https://www.robots.ox.ac.uk/~mosb/',
        icon: <FaHome/>,
      },
      {
        id: 2,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/michael-a-osborne-176895a4/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'twitter',
        path: 'https://twitter.com/maosbot',
        icon: <FaTwitter />,
      }
    ],
    path: '/our-team/michael-osborne',
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Dr Daniel Clarke',
    title: 'Dr Daniel Clarke',
    designation: 'Applied Science',
    socialProfile: [
      {
        id: 1,
        name: 'home',
        path: '/our-team/daniel-clarke',
        icon: <FaHome/>,
      },
      {
        id: 2,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/daniel-clarke-01a1ab94/',
        icon: <FaLinkedinIn />,
      }
    ],
    path: '/our-team/daniel-clarke',
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and dedicated individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
              path={item.path}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
