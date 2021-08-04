/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import {Fragment} from 'react';

import FooterHome from '../../components/layout/footer/footerHome';
import AllPosts from '../../components/posts/all-posts';
import {getAllPosts} from '../../lib/post-util';

function BlogPage(props) {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta 
          name='description'
          content='A website about my portfolio'
        />
      </Head>
      <AllPosts posts={props.posts}/>
      <FooterHome />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default BlogPage;
