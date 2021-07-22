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
          width: "65%",
        }}
      />
      <header className={classes.header}>
        <h1>
          About Me
        </h1>
      </header>
      <body className={classes.body}>
        <div>
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
      </body>
      <hr 
        style={{
          width: "65%",
        }}
      />
    </section>
    
  );
}
export default AboutMe;