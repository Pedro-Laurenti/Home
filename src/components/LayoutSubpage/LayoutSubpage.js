import Head from 'next/head';
import styles from './LayoutSubpage.module.scss';
import Layout from '@components/Layout';
import SliderSubpage from '@components/SliderSubpage';

function LayoutSubpage({ pageTitle, pageDescription, title, image, bodyContent, slidesSubpage }) {
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
                {slidesSubpage && <SliderSubpage slidesSubpage={slidesSubpage} className={styles.imgSubpage1} />}
                {image && <div className={styles.imgSubpage1} style={{ backgroundImage: `url(${image})` }}></div>}
            </div>

            <div className={styles.CorpoSubpagina}>
                {bodyContent}
            </div>
        </Layout>
    );
};

export default LayoutSubpage;