/*
  This file is to make header
  navigation
*/
import Logo from './logo';
import classes from './main-navigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return(
    <header>
      <Link>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;