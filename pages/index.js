import {Fragment} from 'react';
import Head from 'next/head';
import Profile from '../components/home-page/profile';


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
      
    </Fragment>
  );
}

export default HomePage;
