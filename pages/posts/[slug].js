import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content';
import Footer from '../../components/layout/footer/footer';
import { getPostData, getPostsFiles } from '../../lib/post-util';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>A blog by Ahmad Rafi</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
      <Footer />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;