
// pages/_app.tsx

import RootLayout from '@/app/layout';
import { AppProps } from 'next/app';
import '/src/app/globals.css';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RootLayout>

            <Head>
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;