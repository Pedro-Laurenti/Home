import Head from 'next/head';
import styles from './LayoutSubpage.module.scss';
import Layout from '@components/Layout';

function LayoutSubpage({ pageTitle, pageDescription, title, image, bodyContent }) {
    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>

            <div className={styles.subpage1}>
                <div className={styles.contentsubpage1}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.imgSubpage1} style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>

            <div className={styles.CorpoSubpagina}>
                {bodyContent}
            </div>
        </Layout>
    );
};

export default LayoutSubpage;