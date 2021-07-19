import Head from 'next/head';
import Portfolio from '../components/portfolio-page/portfolio-page';
import {Fragment} from 'react';


function PortfolioPage() {
  return (
    <Fragment>
      <Head>
        <title>A Blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <Portfolio />
    </Fragment>
  );
}

export default PortfolioPage;
