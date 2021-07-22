import classes from './footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return(
    <footer className={classes.footer}>
      <div>
        <p>
          Keep in touch with me:
        </p>
      </div>
      <nav >
        <ul>
          <li>
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
          <li>
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
          <li>
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
          <li>
            <Link passHref href="https://www.linkedin.com/in/ahmadrafiwirana/">
              <a>
                <Image 
                  src="/icons/linkedin.png" 
                  width='40' 
                  height='40' 
                  alt='linkedin picture'
                  quality='100'
                />
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href="https://github.com/ahmadrafidev">
              <a>
                <Image 
                  src="/icons/Octocat.png" 
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
    </footer>
  );
}

export default Footer;