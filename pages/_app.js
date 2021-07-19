import '../styles/globals.css'
import Head from 'next/head';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/icons/mars.png"/>
            </Head>
            <Component {...pageProps }/>
        </Layout>
        
    ); 
    
}

export default MyApp;