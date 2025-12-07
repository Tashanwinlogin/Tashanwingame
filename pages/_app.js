import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      {isHomePage ? (
        <>
          <Header />
          <div className="boxed-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
