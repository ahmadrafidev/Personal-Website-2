import classes from './about.module.css';
import styled from 'styled-components';
import Link from 'next/link';

const BlueLink = styled.a `
  color: blue;
`

function AboutMe() {
  return(
    <section className={classes.about}>
      <hr 
        style={{
          width: "70%",
        }}
      />
      <h1 className={classes.header}>
        About Me
      </h1>
      <div>
        <p>
          My name is Ahmad Rafi Wirana. Currently, I am a sophomere
          Computer Science student at University of Indonesia.
        </p>
        <p>
          I am a software development, data science, ethical hacking, competitive programming enthusiast.
        </p>
        <p>
          Other than college, I usually do some side projects
          including website development and mobile development.
        </p>
        <p>
          My projects cleanly arranged in <Link passHref href="/portfolio"><BlueLink href="/portfolio">portfolio page</BlueLink></Link>.
        </p>
        <p>
          Reach me out on email: <BlueLink><a href="mailto:ahmadrafi9910@gmail.com">Send email</a></BlueLink>
        </p>
      </div>
      <hr 
        style={{
          width: "70%",
        }}
      />
    </section>
    
  );
}
export default AboutMe;