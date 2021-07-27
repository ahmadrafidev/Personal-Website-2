/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';
import Head from 'next/head';
import Profile from '../components/home-page/profile';
import FooterHome from '../components/layout/footer/footerHome';

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
      <FooterHome/>
    </Fragment>
  );
}

export default HomePage;
