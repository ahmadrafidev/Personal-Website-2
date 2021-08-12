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
        <title>Ahmad Rafi W.</title>
        <meta 
          name='description'
          content='A stories from Rafi that are packaged in the form of a website'
        />
      </Head>
      <Profile />
      <FooterHome/>
    </Fragment>
  );
}

export default HomePage;
