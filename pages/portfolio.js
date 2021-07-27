/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Portfolio from '../components/portfolio-page/portfolio-page';
import {Fragment} from 'react';
import FooterHome from '../components/layout/footer/footerHome';

function PortfolioPage() {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <Portfolio />
      <FooterHome/>
    </Fragment>
  );
}

export default PortfolioPage;
