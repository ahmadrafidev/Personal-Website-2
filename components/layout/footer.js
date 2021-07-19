import classes from './footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return(
    <section className={classes.footer}>
      <div>
        <p>
          Keep in touch:
        </p>
      </div>
      <nav >
        <ul>
          <li>
            <Image 
              src="/icons/instagram.png" 
              width='35' 
              height='35' 
              alt='instagram picture'
              quality='100'
            />
          </li>
          <li>
            <Link href="https://twitter.com/ahmadrafidev" passHref>
              <Image 
                src="/icons/twitter.png" 
                width='35' 
                height='35' 
                alt='twitter picture'
                quality='100'
              />
            </Link>
          </li>
          <li>
            <Link passHref href="https://ahmadrafi.medium.com/">
              <Image 
                src="/icons/medium.png" 
                width='35' 
                height='35' 
                alt='medium picture'
                quality='100'
              />
            </Link>
          </li>
          <li>
            <Link passHref href="https://www.linkedin.com/in/ahmadrafiwirana/">
              <Image 
                src="/icons/linkedin.png" 
                width='35' 
                height='35' 
                alt='linkedin picture'
                quality='100'
              />
            </Link>
          </li>
          <li>
            <Link passHref href="https://github.com/ahmadrafidev">
              <Image 
                src="/icons/Octocat.png" 
                width='35' 
                height='35' 
                alt='github picture'
                quality='100'
              />
            </Link>
            
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;