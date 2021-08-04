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
      <div class="flex min-h-screen px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 pt-20 md:pt-24 justify-between bg-white dark:bg-secondary">
        <div class="font-secondary text-justify text-sm md:text-xl overflow-auto">
          <div class="font-extrabold text-2xl md:text-6xl flex mb-5">
            <h1>Hi, I am Rafi!</h1>
              <Image 
                src="/icons/peace.png"
                height="45"
                width="45"
                alt="peace icon"
              />
          </div>
          <div class="leading-loose">
            <div class="flex">
              <p>
                I am a sophomore Computer Science student at University of Indonesia.
              </p>
              <Image 
                src="/icons/indonesia.png" 
                width='35' 
                height='35' 
                alt='indonesia picture'
                quality='100'
              />
            </div>
            <div class="flex">
              <p>
                Currently, I am working on some side projects like website and mobile apps.  
              </p>
              <Image 
                src="/icons/smartphone.png" 
                width='35' 
                height='35' 
                alt='smartphone picture'
                quality='100'
              />
            </div>
            <div class="flex">
              <p>
                I am here to write story about my life in college.
              </p>
              <Image 
                src="/icons/college.png" 
                width='35' 
                height='35' 
                alt='college picture'
                quality='100'
              />
            </div>       
            <p>
              <Link href="/posts" passHref>
                <BlueLink href="/posts">My writings</BlueLink>
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
      </div>
    </section>
  );
}

export default Profile;