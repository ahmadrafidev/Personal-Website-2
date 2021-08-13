/* eslint-disable react/no-unescaped-entities */
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
        <div class="min-w-0 font-secondary text-justify text-sm md:text-xl overflow-auto">
          <div class="font-extrabold text-2xl md:text-7xl flex mb-5">
            <h1>Hello!</h1>
            <div class="min-w-0 flex">
              <Image 
                src="/icons/peace.png"
                height="60"
                width="60"
                alt="peace icon"
              />
            </div>     
          </div>
          <div class="uppercase font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl flex-col md:flex mb-2">
            <h2 class="mb-6">I'm Rafi, &nbsp;</h2>
            <Link passHref href="https://en.wikipedia.org/wiki/Software_engineer">
              <BlueLink>
                <p class="animate-bounce text-red-500 mb-5 transform hover:underline">
                  An aspiring Software Engineer!
                </p>
              </BlueLink>
            </Link>
          </div>
          <div class="leading-loose text-base sm:text-lg md:text-2xl">
            <div class="flex leading-loose">
              <p class="text-sm sm:text-base md:text-xl lg:text-2xl">
                I am a sophomore Computer Science student at University of Indonesia.
              </p>
              <div>
                <Image 
                  src="/icons/indonesia.png" 
                  width='45' 
                  height='45' 
                  alt='indonesia picture'
                  quality='100'
                />
              </div>
            </div>
            <div class="flex leading-loose">
              <p class="text-sm sm:text-base md:text-xl lg:text-2xl">
                Currently, I am working on some side projects like website and mobile apps.  
              </p>
              <div>
                <Image 
                  src="/icons/smartphone.png" 
                  width='45' 
                  height='45' 
                  alt='smartphone picture'
                  quality='100'
                />
              </div>
            </div>
            <div class="mt-6">
              <div class="flex leading-loose uppercase font-extrabold text-xl md:text-4xl mb-5">
                <p>the reason i made this website</p>
              </div>
              <div class="flex mb-3">
                <p class="text-sm sm:text-base md:text-xl lg:text-2xl">I code. See what I've done: &nbsp;
                  <Link href="/portfolio" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/portflio">Projects.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="flex leading-loose mb-3">
                <p class="text-sm sm:text-base md:text-xl lg:text-2xl">I write. Checkout my writings: &nbsp;
                  <Link href="/posts" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/posts">Blog.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
              
              <div class="flex">
                <p class="text-sm sm:text-base md:text-xl lg:text-2xl">
                  Interested find more about me? Check this out: &nbsp;
                  <Link href="/about" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/about">About Me.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;