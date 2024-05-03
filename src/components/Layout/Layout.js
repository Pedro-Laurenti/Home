import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';


const Layout = ({ children, className, ...rest }) => {
  return (
      <div className={styles.layout}>
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
          <meta name="description" content="A Clínica Therapies Love Kids dispõe de um portifólio de serviços terapêticos, realizados por uma equipe multidisciplinar altamente qualificada e eficiente, comprometida em oferecer tratamentos especializados com todo o carinho e dedicação." />
          <meta name="keywords" content="therapies, love kids, terapia, criança, autismo, tea, hiperativo, Anápolis, Goiás" />
          <link rel="icon" href="/public/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/public/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/public/android-chrome-512x512.png" />
        </Head>

        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />

      </div>
  );
};

export default Layout;
