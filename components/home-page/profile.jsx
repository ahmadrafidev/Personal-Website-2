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

export default function Profile() {
  return (
    <section>
      <div class="min-h-screen px-4 md:px-20 lg:px-48 xl:px-60 2xl:px-96 pt-9 md:pt-10 justify-between bg-white dark:bg-secondary">
        <div class="font-DMSans text-justify text-sm md:text-xl overflow-auto">
          <div class="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl flex-col md:flex mb-2">
            <h1 class="font-semibold text-2xl md:text-6xl flex mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Halo!",
                    "Bonjour!",
                    "Hola!",
                    "Ahlan!",
                    "Hello!",
                    "Privet!",
                    "Anyoung haseyo!",
                    "Hallo!",
                    "Goede dag!",
                    "Nǐn hǎo!",
                  ],
                }}
              />
            </h1>
            <h2 class="mb-6">I'm Rafi, &nbsp;</h2>
            <p class="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-600 mb-5">
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
                  ],
                }}
              />
            </p>
          </div>
          {/* <motion.img
            whileHover={{ boxShadow: "0px 0px 42px #0dd9e9" }}
            src="/images/foto.png"
            alt="its me"
            class="w-6/12 md:w-3/12 rounded-full"
          /> */}
          <div class="leading-loose text-base sm:text-lg md:text-2xl">
            <div class="flex leading-loose font-semibold text-lg md:text-3xl mb-5">
              <p>Who am I?</p>
            </div>
            <div class="flex leading-loose mb-5">
              <p class="flex flex-col sm:flex-row text-sm sm:text-base md:text-xl">
                I am a sophomore Computer Science student at &nbsp;
                <Link href="https://www.ui.ac.id/" passHref>
                  <a class="font-bold hover:underline">
                    <BlueLink href="https://www.ui.ac.id/">
                      {" "}
                      University of Indonesia.
                    </BlueLink>
                  </a>
                </Link>
              </p>
            </div>
            <div class="flex leading-loose">
              <p class="flex flex-col sm:flex-row text-sm sm:text-base md:text-xl">
                I love to working on some side projects like website and mobile
                apps.
              </p>
            </div>
            <div class="mt-6">
              <div class="flex leading-loose font-semibold text-xl md:text-3xl mb-5">
                <p>The reason I made this website</p>
              </div>
              <div class="flex mb-5">
                <p class="text-sm sm:text-base md:text-xl">
                  I code. See what I've done: &nbsp;
                  <Link href="/portfolio" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/portfolio">Projects.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="flex leading-loose mb-5">
                <p class="text-sm sm:text-base md:text-xl">
                  I write. Checkout my writings: &nbsp;
                  <Link href="/posts" passHref>
                    <a class="font-bold hover:underline">
                      <BlueLink href="/posts">Blog.</BlueLink>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="flex">
                <p class="text-sm sm:text-base md:text-xl">
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
