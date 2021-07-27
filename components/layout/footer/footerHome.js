/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image';
import Link from 'next/link';

function FooterHome() {
  return(
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer class="px-6 md:px-20 lg:px-32 xl:px-60 2xl:px-80 py-2 sm:py-4 md:py-8 flex flex-col md:flex-row justify-between items-center border-t-2 absolute bg-gray-100 inset-x-0 bottom-0">
      <div class="flex">
        <div>
          <h1 class="font-primary font-semibold text-xs md:text-2xl">
            Keep in touch with me:
          </h1>
          <div>
            <nav>
              <ul class="flex mt-5">
                <li class="pr-4 transform hover:scale-125">
                  <Link passHref href="https://instagram.com/ahhmadrafi">
                    <a>
                      <Image 
                        src="/icons/instagram.png" 
                        width='35' 
                        height='35' 
                        alt='instagram picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </li>
                <li class="px-4 hover:scale-125 transform">
                  <Link href="https://twitter.com/ahmadrafidev" passHref>
                    <a>
                      <Image 
                        src="/icons/twitter.png" 
                        width='35' 
                        height='35' 
                        alt='twitter picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </li>
                <li class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://ahmadrafi.medium.com/">
                    <a> 
                      <Image 
                        src="/icons/medium.png" 
                        width='35' 
                        height='35' 
                        alt='medium picture'
                        quality='100'
                      />
                    </a>   
                  </Link>
                </li>
                <li class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://www.linkedin.com/in/ahmadrafiwirana/">
                    <a>
                      <Image 
                        src="/icons/linkedin.png" 
                        width='35' 
                        height='35' 
                        alt='linkedin picture'
                        quality='100'
                      />
                    </a>
                  </Link>
                </li>
                <li class="px-4 hover:scale-125 transform">
                  <Link passHref href="https://github.com/ahmadrafidev">
                    <a>
                      <Image 
                        src="/icons/github.png" 
                        width='35' 
                        height='35' 
                        alt='github picture'
                        quality='100'
                      />
                    </a>
                  </Link>    
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="font-primary flex flex-shrink-1">
        <div>
          <h1 class="italic text-xs md:text-base font-medium">
            Disclaimer: All writings here are my own and do not represent anything.
          </h1>
          <p class="text-xs md:text-base font-medium">
            (c) 2021 by Ahmad Rafi Wirana. All Rights Reserved.
          </p>
        </div>
      </div>  
    </footer>
    
    
  );
}

export default FooterHome;


// Awalnya footer ini buat home, blog dan portfolio page
// karena blog dan portfolio masih kosong, pakai ini dulu
// nanti saat blog dan portfolio udah ada isinya pakai footer biasa