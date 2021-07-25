/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import {Fragment} from 'react';

import Blog from '../components/blog-page/blog-page';
import Footer from '../components/layout/footer';


function BlogPage() {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <Blog />
       <Footer />
    </Fragment>
  );
}

export default BlogPage;
