/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {Fragment} from 'react';

import MainNavigation from './main-navigation';


function Layout(props) {
  return(
    <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;