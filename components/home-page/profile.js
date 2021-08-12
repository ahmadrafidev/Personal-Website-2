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
                height="55"
                width="55"
                alt="peace icon"
              />
          </div>
          <div class="leading-loose text-base sm:text-lg md:text-2xl">
            <div class="flex leading-loose">
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
            <div class="flex leading-loose">
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
            <div class="flex leading-loose">
              <p>I write. My Writings: &nbsp;
                <Link href="/posts" passHref>
                  <a class="font-bold"><BlueLink href="/posts">Blog.</BlueLink></a>
                </Link>
              </p>
            </div>
            <div class="flex leading-loose">
              <p> I code. My portfolio: &nbsp;
                <Link href="/portfolio" passHref>
                  <a class="font-bold"><BlueLink href="/portflio">Projects.</BlueLink></a>
                </Link>
              </p>
            </div>
            <div class="flex leading-loose">
              <p>
                Interested find more about me? &nbsp;
                <Link href="/about" passHref>
                  <a class="font-bold"><BlueLink href="/about">About Me.</BlueLink></a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;