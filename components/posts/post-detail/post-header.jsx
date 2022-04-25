/* eslint-disable react/no-unknown-property */
import Link from 'next/link';

function PostHeader(props) {
  const { title, author } = props;

  return (
    <header>
      <Link passHref href="/posts">
        <a>
          <p class="font-secondary font-bold text-xl sm:text-2xl md:text-4xl hover:underline">Blog.</p>
        </a>
      </Link>
      <div class="text-center">
        <h1 class="font-bold font-secondary text-2xl md:text-3xl lg:text-5xl uppercase pt-8 my-10">{title}</h1>
        <p class="font-secondary font-semibold text-xl md:text-2xl my-7">by {author}</p>
      </div>
    </header>
  );
}

export default PostHeader;