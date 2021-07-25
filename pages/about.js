/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';

import AboutMe from '../components/about-page/about';
import Head from 'next/head';
import Footer from '../components/layout/footer';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <AboutMe />
      <Footer />
    </Fragment>
  );
}

export default AboutPage;
