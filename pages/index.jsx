/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';
import Head from 'next/head';
import Profile from '../components/home-page/profile';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home - Ahmad Rafi W.</title>
        <meta 
          name='description'
          content='A stories from Rafi that are packaged in the form of a website'
        />
      </Head>
      <Profile />
    </Fragment>
  );
}

export default HomePage;
