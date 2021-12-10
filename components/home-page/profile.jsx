/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';

const BlueLink = styled.a `
  color: blue;
`

function Profile() {
  return(
    <section>
      <div class="px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 pt-11 md:pt-12 flex justify-center object-contain bg-white dark:bg-secondary">
        <motion.img whileHover={{boxShadow: "0px 0px 42px #0dd9e9"}} src="/images/foto.png" alt="its me" class="w-2/12 md:w-3/12 rounded-full" />
      </div>
      <div class="flex min-h-screen px-4 md:px-20 lg:px-48 xl:px-60 2xl:px-96 pt-9 md:pt-10 justify-between bg-white dark:bg-secondary">
        <div class="min-w-0 font-secondary text-justify text-sm md:text-xl overflow-auto">
          <div class="font-semibold text-2xl md:text-7xl flex mb-5">
            <h1>Hello!</h1>
            <div class="min-w-0 flex px-4 ease-out">
              <Image 
                src="/icons/peace.png"
                height="50"
                width="67"
                alt="peace icon"
              />
            </div>     
          </div>
          <div class="uppercase font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl flex-col md:flex mb-2">
            <h2 class="mb-6">I'm Rafi, &nbsp;</h2>
            <p class="animate-bounce bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 mb-5">
              <Typewriter     
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "An aspiring software engineer!",
                    "A life-long learner!",
                    "A Tech Enthusiast!",
                    "A Computer Science Student",
                  ]
                }}
              />
            </p>
          </div>
          <div class="leading-loose text-base sm:text-lg md:text-2xl">
            <div class="flex leading-loose mb-5">
              <p class="flex flex-col sm:flex-row text-sm sm:text-base md:text-xl lg:text-2xl">
                I am a sophomore Computer Science student at University of Indonesia.
                <div class="flex flex-row">
                  <Image 
                    src="/icons/indonesia.png" 
                    width='45' 
                    height='45' 
                    alt='indonesia picture'
                    quality='100'
                  />
                  <Image 
                    src="/icons/logoUI.png"
                    width="40"
                    height="40"
                    alt="makara UI"
                    quality="100"
                  />
                </div>
              </p>
            </div>
            <div class="flex leading-loose">
              <p class="flex flex-col sm:flex-row text-sm sm:text-base md:text-xl lg:text-2xl">
                I love to working on some side projects like website and mobile apps.  
                <div>
                  <Image 
                    src="/icons/smartphone.png" 
                    width='45' 
                    height='45' 
                    alt='smartphone picture'
                    quality='100'
                  />
                </div>
              </p>
            </div>
            <div class="mt-6">
              <div class="flex leading-loose uppercase font-extrabold text-xl md:text-4xl mb-5">
                <p>the reason i made this website</p>
              </div>
              <div class="flex mb-5">
                <p class="text-sm sm:text-base md:text-xl lg:text-2xl">I code. See what I've done: &nbsp;
                  <Link href="/portfolio" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/portfolio">Projects.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="flex leading-loose mb-5">
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