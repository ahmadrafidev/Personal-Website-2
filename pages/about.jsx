/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';

import AboutMe from '../components/about-page/about';
import Head from 'next/head';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About - Ahmad Rafi W.</title>
        <meta 
          name='description'
          content='A stories from Rafi that are packaged in the form of a website'
        />
      </Head>
      <AboutMe />
    </Fragment>
  );
}

export default AboutPage;
