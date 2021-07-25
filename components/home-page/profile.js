/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';




const BlueLink = styled.a `
  color: blue;
`

function Profile() {
  return(
    <section>
      <div class="flex flex-grow h-3/5 md:px-80 mt-20 mb-20 justify-between">
        <div class="font-secondary text-justify text-lg">
          <div class="font-bold text-4xl flex mb-5">
            <h1>Hi, I am Rafi!</h1>
              <Image 
                src="/icons/peace.png"
                height="45"
                width="45"
                alt="peace icon"
              />
          </div>
          <div>
            <p>
              I am a sophomore Computer Science student at Universitas Indonesia.
              Currently, I am working on some side projects like website and mobile apps.  
              I am here to write story about my life in college.
            </p>
            <p>
              <Link href="/blog" passHref>
                <BlueLink href="/blog">My writings</BlueLink>
              </Link>
            </p>
            <p>
              <Link href="/portfolio" passHref>
                <BlueLink href="/portflio">My portfolios</BlueLink>
              </Link>
            </p>
            <p>
              <Link href="/about" passHref>
                <BlueLink href="/about">More info about me...</BlueLink>
              </Link>
            </p>
          </div>
        </div>
        <div class="ml-14 w-72">
          {/* <img 
            class="rounded-full"
            src='/images/site/Rafi_Kadept Kastrat.jpg'
            alt='my profile picture'
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Profile;