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
        <a className={classes.logo}>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className={classes.nav__list}>
          <li>
            
            <Link href='/'>
              <a>
                <Image 
                  src="/icons/home.png" 
                  width='25' 
                  height='25' 
                  alt='home picture'
                  quality='100'
                />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>
                <Image 
                  src="/icons/blog.png" 
                  width='25' 
                  height='25' 
                  alt='blog picture'
                  quality='100'
                />
                Blog
              </a>
            </Link>
          </li>
          <li>
            
            <Link href='/portfolio'>
              <a>
                <Image 
                  src="/icons/portfolio.png" 
                  width='25' 
                  height='25' 
                  alt='portfolio picture'
                  quality='100'
                />
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>
                <Image 
                  src="/icons/about.png" 
                  width='25' 
                  height='25' 
                  alt='about picture'
                  quality='100'
                />
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;