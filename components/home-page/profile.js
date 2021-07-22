import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';


import classes from './profile.module.css';

const BlueLink = styled.a `
  color: blue;
`

function Profile() {
  return(
    <section className={classes.profile}>
      <hr
        style={{
          width: "65%",
        }}
      />
      <div className={classes.image}>
        <Image 
          src='/images/site/Rafi_Kadept Kastrat.jpg'
          alt='my profile picture'
          width={300}
          height={300}
        />
      </div>
      <body className={classes.body}>
        <div>
          <div>
            <h1>Hi, I am Rafi!</h1>
              <Image 
                src="/icons/peace.png"
                height="50"
                width="50"
                alt="peace icon"
              />
          </div>
          <p>
            I am a sophomore Computer Science student at Universitas Indonesia.
            Currently, I am working on some side projects like website and mobile apps.  
            I am here to write story about my life in college.
          </p>
        </div>
        <div>
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
      </body>
      <hr
        style={{
          width: "65%",
        }}
      />
    </section>
  );
}

export default Profile;