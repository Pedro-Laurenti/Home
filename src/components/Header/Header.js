import Link from 'next/link';
import { useState,useEffect } from "react";
// import { FaGithub } from 'react-icons/fa';

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

  return (
    <header className={styles.header}>
      <div className={styles.header1}>
        <Link href="/">
          <img src='./1-logo.svg' draggable="false" />
        </Link>
        <div>
            <Link href="/"><h3 className='active'>Início</h3></Link>
            <Link href="/"><h3>Sobre nós</h3></Link>
            <Link href="/"><h3>Blog</h3></Link>
            <Button>Fale conosco</Button>
        </div>
      </div>
      <StrokeHeader />
    </header>
  );
};
export default Header;
