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
          width: "70%",
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
        <p>I am a sophomore Computer Science student at Universitas Indonesia.</p>
        <p>Currently, I am working on some side projects like website and mobile apps.</p>
        <p>I am here to write story about my life in college.</p>
      </div>
      <div>
        <p>
          <Link href="/blog" passHref>
            <BlueLink href="/about">My writings</BlueLink>
          </Link>
        </p>
        <p>
          <Link href="/portfolio" passHref>
            <BlueLink href="/about">My portfolios</BlueLink>
          </Link>
        </p>
        <p>
          <Link href="/about" passHref>
            <BlueLink href="/about">More info about me...</BlueLink>
          </Link>
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

export default Profile;