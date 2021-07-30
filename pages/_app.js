/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import Head from 'next/head';

import Layout from '../components/layout/layout';


function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/icons/startup.png"/>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="description" content="A stories from Ahmad Rafi that are packaged in the form of a website"/>
                <html lang="en"/>
            </Head>
            <Component {...pageProps }/>
        </Layout>
        
    ); 
    
}

export default MyApp;