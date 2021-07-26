/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import Head from 'next/head';

import Layout from '../components/layout/layout';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/icons/mars.png"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
            </Head>
            <Component {...pageProps }/>
            <Footer />
        </Layout>
        
    ); 
    
}

export default MyApp;