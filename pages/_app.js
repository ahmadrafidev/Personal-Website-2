import '../styles/globals.css'
import Head from 'next/head';

import Layout from '../components/layout/layout';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/icons/mars.png"/>
            </Head>
            <Component {...pageProps }/>
            <Footer />
        </Layout>
        
    ); 
    
}

export default MyApp;