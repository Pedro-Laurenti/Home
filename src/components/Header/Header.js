import Link from 'next/link';
import { useState,useEffect } from 'react'; // Importe useState ao invés de useEffect

import { FaBars } from 'react-icons/fa';

import Button from '@components/Button';
import StrokeHeader from '@components/StrokeHeader';

import styles from './Header.module.scss';

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add(styles.transparentHeader);
      } else {
        header.classList.remove(styles.transparentHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Adicione estado para controlar se o menu está aberto

  return (
    <header className={styles.header}>
      <div className={styles.header1}>
        <Link href="/">
          <img src='./1-logo.svg' draggable="false" />
        </Link>
        <div className={`${styles.iconMobile} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>
        <div className={styles.menuDesktop}>
            <Link href="/"><h3 className='active'>Início</h3></Link>
            <Link href="/"><h3>Blog</h3></Link>
            <Button>Fale conosco</Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/"><h3>Início</h3></Link>
          <Link href="/"><h3>Blog</h3></Link>
          <Button>Fale conosco</Button>
        </div>
      )}
      <StrokeHeader />
    </header>
  );
};
export default Header;
