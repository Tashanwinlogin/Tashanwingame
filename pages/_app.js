// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Use your PNG favicon in /public */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      {/* Global header with search bar – stays mounted across pages */}
      <Header />

      {/* Page content */}
      <Component {...pageProps} />

      {/* Global footer */}
      <Footer />
    </>
  );
}
