/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Logo from './logo';

import Link from 'next/link';
import Image from 'next/image';


function MainNavigation() {
  return(
    <header class="px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 py-2 sm:py-4 md:py-8 justify-start md:justify-between flex items-center border-b-2 mx-auto bg-gray-100">
      <div>
        <Link href='/'>
          <a >
            <Logo />
          </a>
        </Link>
      </div>
      <div class="font-semibold text-base sm:text-xl md:text-2xl font-primary"> 
        <nav> 
          <ul class="flex justify-center items-center">
            <li class="px-2 md:px-8 hover:underline transform hover:scale-110">
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
            <li class="px-2 md:px-8 hover:underline transform hover:scale-110">
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
            <li class="px-2 md:px-8 hover:underline transform hover:scale-110">
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
            <li class="px-2 hover:underline transform hover:scale-110">
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
      </div>
    </header>
  );
}

export default MainNavigation;