import React, {Component} from 'react';
import { ThemeProvider, Container, Box, Text } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainTitle from '../sections/main-title';
import SectionHeader from '../components/section-header';
import PatternBG from 'assets/patternBG.png';
import { Table } from '@component-controls/components';


  const rows = [
    ['Providing health and care to NHS referred patients', 'NHS Patients', 'Name, demographics, health data, video and/or audio conversations recorded through clinical sessions as well as recorded calls and emails to support teams regarding your service with us, health experience questionnaires', 'If you are an adult service user, we will keep your data for 8 years. If you are 16 we will keep your data until your 25th birthday or 26 if you were 17 at the time of your treatment.', 'Performing a task in the public interest [Article 6(1)(e)] and; The provision of health or social care or treatment [Article 9(2)(h)]'],
    ['Providing  health and care to private paying patients', 'Private paying patients', 'Name, demographics, health data, video and/or audio conversations recorded through clinical sessions as well as recorded calls and emails to support teams regarding your service with us, health experience questionnaires','If you are an adult service user, we will keep your data for 8 years. If you enquired about our service but decided not to proceed, we will keep your data for two years. If you are 16 we will keep your data until your 25th birthday or 26 if you were 17 at the time of your treatment.', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)] and; The provision of health or social care or treatment [Article 9(2)(h)]'],
    ['Communicating regarding any concerns, queries or complaints', 'All patients', 'Name, contact details, any relevant information including health', 'We keep your data for 10 years', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)] and; Ensuring high standards of quality and safety of health care [Article 9(2)(i)]'],
    ['Quality assurance, quality improvement, training and security including conducting peer reviews of consultations conducted by clinicians delivering Anathem’s services', 'All patients', 'Health data, video and/or audio conversations recorded through clinical sessions as well as recorded calls and emails to support teams regarding your service with us', 'If you are an service user, we will keep your data for 90 days.','Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)] and; Ensuring high standards of quality and safety of health care [Article 9(2)(i)]'],
    ['To conduct research', 'Patients who register their interest and participate', 'Name, contact details, study ID and health data, video and/or audio conversations recorded through clinical sessions. We remove any details that could identify you from this information. This includes your name, address and contact information.', 'We keep your data for up to 10 years, which will vary on the type of research', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)] and; For the public interest, scientific or statistical purposes [Article 9(2)(j)]'],
    ['Further research purposes (see section “Helping with health research”)', 'All patients', 'Health data, video and/or audio conversations recorded through clinical sessions. We remove any details that could identify you from this information. This includes your name, address and contact information. As part of our research, we may use your contact details to invite you to take part in clinical trials.', 'We keep your data for 8 years'],
    ['Anathem application use','All patients', 'IP address, device address, time of day, length of time, what screens visit, health data.', 'If you are an adult service user, we will keep your data for 8 years. If you are 16 we will keep your data until your 25th birthday or 26 if you were 17 at the time of your treatment.', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)]'],
    ['Complying with our legal or regulatory obligations, and defending or exercising our legal rights where necessary or in the vital interests of the data subject', 'All patients', 'All personal data held by Anathem where necessary', 'We keep your data for 90 days.', 'For compliance with a legal obligation [Article 6(1)(c) and Article 9(2)(f)] and; For reasons of substantial public interest [Article 9(2)(g)]'],
    ['Supplier retention', 'All suppliers', 'Name, address, contact details and payment information', 'We keep your contact details for the life of the contract plus 6 years for audit purposes', 'Processing is necessary for the performance of a contract [Article 6(b)]'],
    ['Managing our business operations such as maintaining accounting records, analysis of financial results, internal audit requirements, receiving professional advice (eg tax or legal advice)', 'Patients and commissioners', 'Financial, contact details, name', 'We keep your data for 8 years', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)] and; For compliance with a legal obligation [Article 6(1)(c)]'],
    ['Provide information in relation to new services offered by Anathem as an existing client or potential new client, or to invite clients to participate in service development activities', 'Patients and mail list subscribers', 'Name, contact details', 'We keep your data for 12 months', 'Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)]'],
    ['Collect analytics to understand user numbers accessing website, registering interest for our research','All individuals access social media platforms that click on our adverts','IP address, device address, time of day, length of time, what screens are visited','We keep your data for 8 years','Providing you or planning for healthcare services in our ‘legitimate interest’ [Article 6(1)(f)]']
  ];

  const columns = ['Purposes of processing',
  'Types of individuals',
  'Types of personal data',
  'Retention period',
'Lawful basis']

class TableRow extends Component {
    render() {
        let row = this.props.rowContent;
        return (
            <tr>
                {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
            </tr>
        )
    }
}

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anathem Privacy Policy" />
          <Container sx={styles.background}>
            <SectionHeader
              title="Anathem Privacy Policy"
            />
            <Box>
                <Text variant='heroSecondaryGrey'>
                    <b>1.  Personal data processed</b>
                    </Text>
              <Text variant='heroSecondaryGrey'>
              Personal data is any information we have that can identify you, such as your name, date of birth, medical history or credit card details.
<br/><br/>
Our data retention period, which is the length of time we hold your personal data, is informed by the Department of Health, NHS England and professional bodies such as the British Medical Association and The Health and Care Professions Council.
<br/><br/>
We might also keep some information that doesn't identify you to help improve our business and our services as well as helping with health research. We do this by removing your identifiable information (such as your name, date of birth, contact details) to form ‘de-identified’ data.
<br/><br/>
In accordance with national opt-out legislation, you can choose to opt out of your confidential information being used for research and planning. For more information on this, please visit the NHS data opt-out website (https://digital.nhs.uk/services/national-data-opt-out).  If you have any concerns about this or wish to change your data preferences, please email the Governance team at 
info@anathem.ai  between 8am and 6pm weekdays.
<br/><br/>
We process the following personal data for the purposes listed. Where we use personal data, we will only use the minimum necessary personal data for that purpose.
              </Text>
            <Container>
            <table>
        <tr>
            {columns.map((head, headID) =>
                            <th  key={headID} >{head}</th>)}
        </tr>
        <tbody>
            {rows.slice(0,8).map((row, rowID) =>
                <TableRow key={rowID} rowContent={row} />)}
        </tbody>
    </table>
            </Container>
            <Text variant='heroSecondaryGrey'>
                    <br/><br/>
                    <b>Where we rely on GDPR Article 6(1)(f) 'legitimate interests' are as follows:</b>
                </Text>
                <Text variant='heroSecondaryGrey'>
                1.	Providing health care to individuals
                <br/>
                2.	Ensuring complaints and communications are handled appropriately
                <br/>
                3.	Ensuring we provide and maintain a high level of quality of service
                <br/>
                4.	Undertaking research to further improve our service
                <br/><br/>
                We receive personal data from several sources. 
                <br/><br/>
                <b>Helping with health research</b><br/><br/>
When using your de-identified data to support health research, we aim to publish our research results in peer-reviewed journals or by working with academics. We may conduct research with partner organisations such as universities or other academic institutions.
We may also use data that does not identify you personally as part of statistics that we collect on certain types of illness, symptoms and conditions. This might include us contributing medical data to our partners and organisations such as NHS England. They will always be anonymised, which means you cannot be personally identified. This is so we can improve our medical knowledge, help deliver better care and help the general public.
<br/><br/>
<b>Sharing your personal data</b> <br/><br/>
We will only share your personal data with organisations involved with your care (for example your GP or NHS Trust), unless we have a legal obligation to share with another party. Where personal data will be shared outside the purposes of providing you care we will inform you unless the law restricts us from doing so.
<br/><br/>
<b>Where we store and process your data</b> <br/><br/>
We use data hosting service providers based in Azure. All Data resides in the UK to host the information we collect.
                </Text>
                <Text variant='heroSecondaryGrey'>
                    <b>Further uses of personal data for corporate purposes:</b>
                    <br/><br/>
                    </Text>
                    <Container>
                    <table>
                    <tr>
                        {columns.map((head, headID) =>
                                        <th  key={headID} >{head}</th>)}
                    </tr>
                    <tbody>
                        {rows.slice(9,10).map((row, rowID) =>
                            <TableRow key={rowID} rowContent={row} />)}
                    </tbody>
                    </table>
                    </Container>
                    <Text variant='heroSecondaryGrey'>
                    <b>How to unsubscribe from our marketing communications</b>
                    <br/><br/>
                    You may unsubscribe from our marketing communications by clicking on the “unsubscribe” link at the bottom of our emails or emailing the Data Protection Lead at info@anathem.ai
                    <br/><br/>
                    Please note customers cannot opt-out of receiving transactional emails related to their account or service with Anathem.
                    </Text>

                    <Text variant='heroSecondaryGrey'>
                    <b>2.  Website users and social media </b>
                    <br/>
                    </Text>
                    <Text variant='heroSecondaryGrey'>
                    <b>Personal data processed</b>
                    <br/><br/>
                    </Text>
                    <Container>
                    <table>
                      <tr>
                          {columns.map((head, headID) =>
                                          <th  key={headID} >{head}</th>)}
                      </tr>
                      <tbody>
                          {rows.slice(10,11).map((row, rowID) =>
                              <TableRow key={rowID} rowContent={row} />)}
                      </tbody>
                      </table>
                      </Container>
                    <Text variant='heroSecondaryGrey'>
                    <br/><br/>
                    For website users and social media platforms, where we rely on GDPR Article 6(1)(f) our legitimate interests are as follows:
                    <br/><br/>
                    1.	Marketing our products, services and research.
                    <br/>
                    </Text>

                    <Text variant='heroSecondaryGrey'>
                    <b>3.  Cookies </b> <br/><br/>
                    Cookies are small text files that are placed on your computer’s hard drive by your web browser when you visit any website. They allow information gathered on one web page to be stored until it is needed for use on another, allowing a website to provide you with a personalised experience and the website owner with statistics about how you use the website so that it can be improved.
                    <br/><br/>Some cookies may last for a defined period of time, such as one day or until you close your browser. Others last indefinitely. Your web browser should allow you to delete any you choose. It also should allow you to prevent or limit their use.
                    <br/><br/>Our website uses cookies. They are placed by software that operates on our servers, and by software operated by third parties whose services we use. We use cookies in the following ways:
                    <br></br>
                    -	to track how you use our website
                    -	to record whether you have seen specific messages we display on our website
                    -	to keep you signed into our website
                    -	to record your answers to surveys and questionnaires on our site while you complete them
                    <br/><br/>
                    <b> Personal identifiers from your browsing activity</b>
                    <br/><br/>
                    Requests by your web browser to our servers for web pages and other content on our website are recorded.
                    We record information such as your geographical location, your Internet service provider and your IP address. We also record information about the software you are using to browse our website, such as the type of computer or device and the screen resolution.
                    We use this information in aggregate to assess the popularity of the webpages on our website and how we perform in providing content to you.
                    If combined with other information we know about you from previous visits, the data possibly could be used to identify you personally, even if you are not signed in to our website.
                    <br/><br/>
                    <b>Our use of re-marketing</b>
                    <br/><br/>
                    Re-marketing involves placing a cookie on your computer when you browse our website in order to be able to serve you an advert for our products or services when you visit some other website.
                    <br/>
                    We may use a third party to provide us with re-marketing services from time to time. If so, then if you have consented to our use of cookies, you may see advertisements for our products and services on other websites.
                    <br/><br/>
                    </Text>
                <Text variant='heroSecondaryGrey'>
                    <b>4.  Your data protection rights </b>
                    <br/><br/>
                    The UK GDPR allows various rights for people whose data is being processed. The rights are not absolute and so sometimes do not apply. Where you wish to exercise any of your rights, you may do so free of charge (unless in specific circumstances, where you will be informed in advance) by contacting us at info@anathem.ai. We will respond within one month.
                    Under the GDPR (General Data Protection Regulation,) you (the data subject) have a right to access your personal data held by an organisation.
                    <br/><br/>
                    <b>How do I submit a Data Subject Access Request (DSAR)? </b>
                    <br/><br/>
                    If you wish to request personal information that is held about you, there are multiple ways that you can do this; 
                    <br/>
                    ● Verbally (via clinician or admin support);
                    <br/> 
                    ● Email info@anathem.ai.
                    <br/> 
                    ● Letter to: Anathem Limited, 14 Highwoods Close, Marlow, SL7 3PG.
                    <br/><br/>

                    Whichever method you use to contact us, you will need to provide us with the following: <br/>
                    ●Your full contact details. <br/>
                    ●A description of the information you seek (including dates, subjects, specific documents etc.) <br/>
                    ●Proof of your identity (applicable if request is made by letter or email). This is to ensure we only provide personal information to the individual who is entitled to receive it. <br/>
                    A DSAR will only be valid if it contains all the information we need and we have received proof of your identity, whether you are the data subject or if you are making a request on behalf of the data subject.<br/>

                    <br/><br/>
                    Details of the rights within UK GDPR are below. You will be informed if the right is available to you upon application:
                    <br/><br/>
                    <table>
                    <tr>
                      <th>Right</th>
                      <th>Meaning</th>
                    </tr>
                    <tbody>
                        <tr>
                          <td><b>Access</b> UK GDPR Article 15</td>
                          <td>You may request a copy of the data held by us about you.</td>
                        </tr>
                        <tr>
                          <td><b>Rectification</b> UK GDPR Article 16</td>
                          <td>If you think the data held by us is wrong and you may request that it is corrected.</td>
                          </tr>
                          <tr>
                            <td><b>Erasure </b> (Right to be forgotten) UK GDPR Article 17</td>
                            <td>You can request that your data is deleted by us.</td>
                          </tr>
                          <tr>
                            <td><b>Restriction</b> UK GDPR Article 18</td>
                            <td>There are circumstances in which you may ask us to stop processing your data but we must otherwise keep the data. For example, where required by law.</td>
                          </tr>
                          <tr><td><b>Portability</b> UK GDPR Article 19
                            </td>
                            <td>You can ask for a copy of your data in a format that can be readily transferred to another company.</td></tr>
                          <tr>
                            <td><b>Objection </b> UK GDPR Article 20</td>
                            <td>You can object to the processing of your personal data when we are relying on a legal obligation or public duty legal basis or where we are processing in our legitimate interest, especially for direct marketing.</td>
                          </tr>
                          <tr>
                            <td><b>Automated decisions</b> UK GDPR Article 22</td>
                            <td>Where a computer makes a decision about you without human intervention, for example in an online loan application you have the right to know how the decision was arrived at.</td>
                          </tr>
                    </tbody>
                    </table>
                </Text>
                <Text variant='heroSecondaryGrey'>
                    <b>5.  Protecting your personal data </b>
                    <br/><br/>
                    Anathem takes protection of your personal data very seriously. Anathem uses a range of precautions that include administrative, technical and physical measures, to safeguard your personal data against loss, theft and misuse, as well as against unauthorized access, disclosure, alteration and destruction. We store the personal data you provide encrypted on computer servers that are located in highly secure and controlled facilities. We restrict access to personal data to our employees, contractors and agents who need access in order to operate, develop, or improve our services and the application.
<br/>We follow industry accepted security standards to protect the personal data you submit to us, both during transmission and once we receive it.
<br/>We have implemented several technical and organisational measures to ensure your personal data is kept secure. This includes:
<br/>
<br/>-	  Achieving the European ISO27001 certification for Information Security Management Systems which requires annual recertification by external auditors
<br/>-	  Compliance with the NHS Data Security and Protection Toolkit
<br/>-	  Completing annual Cyber Essentials Plus certification by external security specialist company
<br/>-	  Annual penetration testing of our systems by an external cyber security specialist company
<br/>-	  Annual training for all staff on how to handle information securely.
<br/>-	  Having role-based access controls so that staff can only access records necessary for their role.
<br/>-	  Hosting on a secure platform through Azure who maintain the servers and ensure they are secure and up-to-date at all times with the latest security patches. This also includes extensive physical access security systems to the server sites by professional security staff utilizing video surveillance, state-of-the-art intrusion detection systems, and other electronic means.
<br/><br/>
</Text>
<Text variant='heroSecondaryGrey'>
                    <b>6.  Complaints </b>
                    <br/><br/>
                    If you have any complaints regarding our use of personal data, please contact us by one of the above means. In the event we cannot resolve your complaint, you have the right to complain to the Information Commissioners Office, the UK data protection regulator.
They can be contacted at:
Information Commissioner's Office (www.ico.org.uk)
Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
Tel: 0303 123 1113
</Text>
            </Box>
          </Container>
      </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

const styles = {
  background: {
    py: [2, null, null, 9],
    px: ['10px', null, null, '50px'],
  },
  mission: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 8],
    px: ['10px', null, null, '50px'],
    mt: 5,
    mb: 10
  },
  missionText: {
    px: '50px'
  },
  table: {
    border: '2px solid black',
    width: '800px',
    height: '200px',
},
th: {
    borderBottom: '1px solid black',
},
td: {
    textAlign: 'center',
},
}
