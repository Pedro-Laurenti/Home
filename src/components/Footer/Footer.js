import Link from 'next/link';
import { Parallax } from 'react-parallax';


import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.scss';



const Footer = ({ ...rest }) => {

  return (
    <footer className={styles.footer} {...rest}>
      <div className={styles.footPt1}>
        
        <div></div>
        
        <div className={styles.footLogo}>
          <img src='./1-2-logo-white.svg' />
          <div className={styles.footIcons}>
            <a target="_blank" href='https://www.youtube.com/channel/UCszsVqsZ-vLzzaeyiDqgz_w'><FaYoutube /></a>
            <a target="_blank" href='https://twitter.com/therapieslovekd'><FaTwitter /></a>
            <a target="_blank" href='https://www.tiktok.com/@therapieslovekids'><FaTiktok /></a>
            <a target="_blank" href='https://www.instagram.com/therapieslovekids/'><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.footPages}>
          <h2>Páginas</h2>        
          <ul>
            <Link href="/"><h3>Início</h3></Link>
            <Link href="/blog"><h3>Blog</h3></Link>
            <Link href="/sobre"><h3>Sobre nós</h3></Link>
            
          </ul>
        </div>

        <div className={styles.footPages}>
          <h2>Institucional</h2>        
          <ul>
            <Link href="/"><h3>Vagas</h3></Link>
            <Link href="/politica-de-privacidade"><h3>Política de privacidade</h3></Link>
          </ul>
        </div>

        <div></div>

      </div>
      <div className={styles.footPt2}>
        <h6>COPYRIGHT THERAPIES LOVE KIDS 2024. TODOS OS DIREITOS RESERVADOS.</h6>
      </div>
    </footer>
  );
};

export default Footer;
