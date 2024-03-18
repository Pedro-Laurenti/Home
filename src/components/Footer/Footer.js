import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <div className={styles.footPt1}>
        <div className={styles.footLogo}>
        </div>
        <div className={styles.footPages}></div>
        <div className={styles.footinsti}></div>
      </div>
      <div className={styles.footPt2}>COPYRIGHT THERAPIES LOVE KIDS 2023. TODOS OS DIREITOS RESERVADOS.</div>
    </footer>
  );
};

export default Footer;
