/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';

import MainNavigation from './main-navigation';
import Footer from './footer';



function Layout(props) {
  return(
    <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  );
}

export default Layout;