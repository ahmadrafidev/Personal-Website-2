/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Portfolio from '../components/portfolio-page/portfolio-page';
import {Fragment} from 'react';

function PortfolioPage() {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Ahmad Rafi W.</title>
        <meta 
          name='description'
          content='A stories from Rafi that are packaged in the form of a website'
        />
      </Head>
      <Portfolio />
    </Fragment>
  );
}

export default PortfolioPage;
