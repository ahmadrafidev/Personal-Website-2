/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';


function Footer() {
  return(
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer class="px-6 md:px-20 lg:px-48 xl:px-60 2xl:px-96 py-8 flex flex-col md:flex-row justify-between items-center relative inset-x-0 bottom-0 bg-gray-50 dark:bg-primary">
      <div class="flex-col md:flex">
        <div>
          < h1 class = "font-DMSans font-semibold text-xs md:text-xl" >
            Keep in touch with me:
          </h1>
          <div>
            <nav>
              <ul class="flex mt-5">
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="pr-4 transform hover:scale-125">
                  <Link passHref href="https://instagram.com/ahhmadrafi">
                    <a>
                      <Image 
                        src="/icons/instagram.png" 
                        width='30' 
                        height='30' 
                        alt='instagram picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-4 hover:scale-125 transform">
                  <Link href="https://twitter.com/ahmadrafidev" passHref>
                    <a>
                      <Image 
                        src="/icons/twitter.png" 
                        width='30' 
                        height='30' 
                        alt='twitter picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://ahmadrafi.medium.com/">
                    <a> 
                      <Image 
                        src="/icons/medium.png" 
                        width='30' 
                        height='30' 
                        alt='medium picture'
                        quality='100'
                      />
                    </a>   
                  </Link>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://www.linkedin.com/in/ahmadrafiwirana/">
                    <a>
                      <Image 
                        src="/icons/linkedin.png" 
                        width='30' 
                        height='30' 
                        alt='linkedin picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://github.com/ahmadrafidev">
                    <a>
                      <Image 
                        src="/icons/github.png" 
                        width='30' 
                        height='30' 
                        alt='github picture'
                        quality='100'
                      />
                    </a>
                  </Link>    
                </motion.li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="font-DMSans flex flex-shrink-1 mt-4">
        <div>
          <p class="text-xs md:text-xl font-bold">
            (c) 2021 - Ahmad Rafi Wirana.
          </p>
        </div>
      </div>  
    </footer>
    
    
  );
}

export default Footer;