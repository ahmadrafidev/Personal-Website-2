/* eslint-disable react/no-unknown-property */
import Link from 'next/link';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const BlueLink = styled.a `
  color: blue;
`

function PostItem(props) {
  const { title, excerpt, date, author, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const linkPath = `/posts/${slug}`;

  return (
    <li class="px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 flex text-left font-primary my-10">
      <div>
        <Link href={linkPath} passHref>
          <BlueLink> <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} class="font-bold text-xl md:text-3xl pb-3">{title}</motion.h1> </BlueLink>
        </Link>
        <p class="font-medium text-lg">{excerpt}.</p>
        <p class="text-lg md:text-xl"> by {author} - <time>{formattedDate}</time> </p>
        <Link href={linkPath} passHref>
          <BlueLink><p class="text-lg md:text-2xl hover:underline">Read More...</p> </BlueLink>
        </Link>
      </div>
    </li>
  );
}

export default PostItem;