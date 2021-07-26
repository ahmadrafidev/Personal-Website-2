/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import Link from 'next/link';

const BlueLink = styled.a `
  color: blue;
`

function AboutMe() {
  return(
    <section>
      <div class="px-6 md:px-80 mb-auto font-secondary">
        <div class="uppercase text-center text-xl md:text-3xl font-semibold mt-16 mb-7">
          <h1>
            About Me
          </h1>
        </div>
        <div class="text-sm md:text-xl font-medium text-justify mb-20">
          <p>
            My name is Ahmad Rafi Wirana. Currently, I am a sophomere
            Computer Science student at University of Indonesia.  
            I am a software development, data science, ethical hacking, and competitive programming enthusiast.
            Other than college, I usually do some side projects
            including website development and mobile development.
            My projects cleanly arranged in <Link passHref href="/portfolio"><BlueLink href="/portfolio">portfolio page</BlueLink></Link>.
            Reach me out on email: <BlueLink><a href="mailto:ahmadrafi9910@gmail.com">send email.</a></BlueLink>
          </p>
        </div>
      </div>
    </section>
    
  );
}
export default AboutMe;