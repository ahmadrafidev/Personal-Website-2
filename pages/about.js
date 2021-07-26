/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';

import AboutMe from '../components/about-page/about';
import Head from 'next/head';


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
    </Fragment>
  );
}

export default AboutPage;
