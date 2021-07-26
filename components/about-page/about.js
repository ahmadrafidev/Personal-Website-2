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
      <div class="px-6 md:px-20 lg:px-32 xl:px-60 2xl:px-80 mb-auto font-secondary">
        <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-7">
          <h1>
            About Me
          </h1>
        </div>
        <div class="text-sm md:text-xl font-medium text-justify mb-10">
          <p class="leading-loose">
            My name is Ahmad Rafi Wirana. Currently, I am a sophomere
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
            Software Engineering journey. My tech stack is <BlueLink href="https://nextjs.org/">Next JS</BlueLink>, <BlueLink href="https://tailwindcss.com/docs">Tailwind CSS</BlueLink>,
            and <BlueLink href="https://graphql.org/">GraphQL</BlueLink> (soon).
          </p>
        </div>
        {/* <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-7">
          <h3>
            TECH STACK 
          </h3>
        </div>
        <div>
          <ul class="flex ">
            <li>
              <Image 
                src="/icons/next.png"
                width="100"
                height="70"
                alt="nextjs icon"
              />
            </li>
            <li>
              <Image 
                src="/icons/python.png"
                width="70"
                height="70"
                alt="python icon"
              />
            </li>
          </ul>
        </div> */}
      </div>
    </section>
    
  );
}
export default AboutMe;