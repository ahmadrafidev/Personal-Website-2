/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const BlueLink = styled.a `
  color: blue;
`

function AboutMe() {
  return(
    <section>
      <div class="px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 mb-auto font-secondary overflow-auto md:overflow-y-scroll bg-white dark:bg-secondary">
        <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-7">
          <h1>
            About Me
          </h1>
        </div>
        <div class="text-sm md:text-xl font-medium text-justify mb-10">
          <p class="leading-loose">
            My name is Ahmad Rafi Wirana. Currently, I am a sophomore
            Computer Science student at University of Indonesia.  
            I am a software development, data science, ethical hacking, and competitive programming enthusiast.
            Other than college, I usually do some side projects
            including website development and mobile development.
            My projects cleanly arranged in <Link passHref href="/portfolio"><BlueLink href="/portfolio">portfolio page</BlueLink></Link>.
            Reach me out on email: <BlueLink><a href="mailto:ahmadrafi9910@gmail.com">send email.</a></BlueLink>
          </p>
        </div>
        <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-7">
          <h2>
            What I am Doing Now
          </h2>
        </div>
        <div class="text-sm md:text-xl font-medium text-justify mb-20">
          <p class="leading-loose">
            Currently, I am a sophomore year in major of Computer Science at University of Indonesia.
            Besides doing academic, my other activities are that I served as the Head of Research and
            Strategic Action at <BlueLink href="https://bem.cs.ui.ac.id/">BEM Fasilkom UI</BlueLink> and
            Staff of Software Engineering Academy at <BlueLink href="https://www.compfest.id/">COMPFEST</BlueLink>.
            In summer holiday of 2021, instead of doing nothing I make a personal website as a very first portfolio for my 
            Software Engineering journey.
          </p>
        </div>
        <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-12">
          <h3>
            TECH STACK 
          </h3>
        </div>
        <div>
          <ul class="flex flex-col md:flex-row items-center pb-10 justify-between">
            <li class="pr-10 w-32 h-32">
              <Image 
                src="/icons/next.png"
                width="100"
                height="70"
                alt="nextjs icon"
              />
            </li>
            <li class="pr-10 w-32 h-32">
              <Image 
                src="/icons/python.png"
                width="70"
                height="70"
                alt="python icon"
              />
            </li>
            <li class="pr-10 w-36 h-32">
              <Image 
                src="/icons/Java.png"
                width="100"
                height="65"
                alt="java icon"
              />
            </li>
            <li class="pr-10 w-32 h-32">
              <Image 
                src="/icons/firebase.png"
                width="75"
                height="80"
                alt="firebase icon"
              />
            </li>
            <li class="pr-10 w-48 h-32">
              <Image 
                src="/icons/flutter.png"
                width="170"
                height="65"
                alt="flutter icon"
                quality='100'
              />
            </li>
          </ul>
          <ul class="flex flex-col md:flex-row items-center pb-10 justify-between">
            <li class="pr-10 w-32 h-32">
              <Image 
                src="/icons/graphql.png"
                width="80"
                height="80"
                alt="graphql icon"
              />
            </li>
            <li class="pr-10 w-32 h-32">
              <Image 
                src="/icons/Js.png"
                width="80"
                height="80"
                alt="javascript icon"
              />
            </li>
            <li class="pr-10 w-52 h-32">
              <Image 
                src="/icons/react.png"
                width="130"
                height="90"
                alt="react icon"
              />
            </li>
            <li class="pr-10 w-36 h-32"> 
              <Image 
                src="/icons/tailwind-css.png"
                width="85"
                height="60"
                alt="tailwind css icon"
              />
            </li>
            <li class="pr-0 w-36 h-32"> 
              <Image 
                src="/icons/Go.png"
                width="80"
                height="80"
                alt="golang css icon"
              />
            </li>
          </ul>
          <ul class="flex flex-col md:flex-row items-center pb-10 justify-around">    
            <li class="pr-10 w-32 h-24"> 
              <Image 
                src="/icons/swift.png"
                width="80"
                height="80"
                alt="swiftUI icon"
              />
            </li>
            <li class="pr-10 w-32 h-24"> 
              <Image 
                src="/icons/Kotlin.png"
                width="80"
                height="80"
                alt="Kotlin icon"
              />
            </li>
            <li class="pr-10 w-32 h-24"> 
              <Image 
                src="/icons/postgresql.png"
                width="80"
                height="80"
                alt="Postgresql icon"
              />
            </li>
          </ul> 
        </div>
      </div>
    </section>
    
  );
}
export default AboutMe;