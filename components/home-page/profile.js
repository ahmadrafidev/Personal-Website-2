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
      <div class="flex flex-grow h-auto md:px-80 my-40 justify-between">
        <div class="font-secondary text-justify text-xl">
          <div class="font-bold text-4xl flex mb-5">
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
        <div class="rounded-full object-right sm:object-top">
            <Image 
              class="rounded-full"
              src='/images/site/Rafi_Kadept Kastrat.jpg'
              alt='my profile picture'
              width="400"
              height="400"
            />
          </div>
      </div>
    </section>
  );
}

export default Profile;