/*
  This file is to make header
  navigation
*/
import Logo from './logo';
import classes from './main-navigation.module.css';
import Link from 'next/link';
import Image from 'next/image';


function MainNavigation() {
  return(
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Image 
              src="/icons/home.png" 
              width='25' 
              height='25' 
              alt='home picture'
              quality='100'
            />
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Image 
              src="/icons/blog.png" 
              width='25' 
              height='25' 
              alt='blog picture'
              quality='100'
            />
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Image 
              src="/icons/portfolio.png" 
              width='25' 
              height='25' 
              alt='portfolio picture'
              quality='100'
            />
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Image 
              src="/icons/about.png" 
              width='25' 
              height='25' 
              alt='about picture'
              quality='100'
            />
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;