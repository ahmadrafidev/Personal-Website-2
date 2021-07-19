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
      <div className={classes.image}>
        <Image 
          src='/images/site/Rafi_Kadept Kastrat.jpg'
          alt='my profile picture'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Rafi!</h1>
      <p>I am a sophomore computer science student at Universitas Indonesia</p>
      <p>
        I am here to write story about my life in college
      </p>
      <p>
        <Link href="/blog" passHref>
          <BlueLink href="/about">My Writings</BlueLink>
        </Link>
      </p>
      <p>
        <Link href="/portfolio" passHref>
          <BlueLink href="/about">My Portfolios</BlueLink>
        </Link>
      </p>
      <p>
        <Link href="/about" passHref>
          <BlueLink href="/about">More info about me...</BlueLink>
        </Link>
      </p>
      
    </section>
  );
}

export default Profile;