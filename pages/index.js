/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';
import Head from 'next/head';
import Profile from '../components/home-page/profile';
import Footer from '../components/layout/footer';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <Profile />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
