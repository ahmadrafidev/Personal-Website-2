/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Logo from './logo';

import Link from 'next/link';
import Image from 'next/image';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from '@heroicons/react/solid';
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

function MainNavigation() {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'light'){
      return (
        <MoonIcon 
          className="w-7 h-7" 
          role="button" 
          onClick={() => setTheme('dark')} />
      );
    }
    else {
      return (
        <SunIcon 
        color="black"
        className="w-7 h-7" 
        role="button" 
        onClick={() => setTheme
          ('light')} />
      );
    }
  };
  return(
    <header class="px-6 md:px-20 lg:px-48 xl:px-60 2xl:px-96 py-2 sm:py-4 md:py-8 justify-start md:justify-between flex-column sm:flex items-center mx-auto bg-gray-100 dark:bg-primary">
      <div>
        <Link href='/'>
          <a >
            <Logo />
          </a>
        </Link>
      </div>
      <div class="top-0 right-0 absolute py-2 sm:py-4 px-2">
        <button onClick={() => setIsOpen(!isOpen)} class="focus:outline-none block sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path class={!isOpen? 'block': 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            <path class={isOpen? 'block': 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div class={`${isOpen? 'block': 'hidden'} flex flex-col sm:flex font-semibold text-base sm:text-lg md:text-xl font-primary pt-5 sm:pt-0`}> 
        <nav > 
          <ul class="flex justify-around items-center">
            <motion.li class="px-px sm:px-3 mr-2 transform hover:scale-110 dark:bg-primary" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
              <Link href='/'>
                <a>
                  Home
                </a>
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-px sm:px-3 mr-2 transform hover:scale-110 dark:bg-primary">
              <Link href='/posts'>
                <a>
                  Blog
                </a>
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-px sm:px-3 mr-2 transform hover:scale-110 dark:bg-primary">
              <Link href='/portfolio'>
                <a>
                  Portfolio
                </a>
              </Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-px sm:px-3 mr-3 transform hover:scale-110 dark:bg-primary">
              <Link href='/about'>
                <a>

                  About
                </a>
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{scale: 1.2, boxShadow: "0px 0px 10px rgb(255,255,255)",}} 
              whileTap={{scale: 0.9}} 
              class='pl-2 transform hover:scale-125 rounded-full h-8 w-11 justify-center bg-gray-300 dark:bg-gray-300'
            >
              {renderThemeChanger()}
            </motion.li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default MainNavigation;