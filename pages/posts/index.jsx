/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

function BlogPage(props) {
    return ( <
        Fragment >
        <
        Head >
        <
        title > Blog - Ahmad Rafi W. < /title> <
        meta name = 'description'
        content = 'A stories from Rafi that are packaged in the form of a website' /
        >
        <
        /Head> <
        AllPosts posts = { props.posts }
        />

        <
        /Fragment>
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