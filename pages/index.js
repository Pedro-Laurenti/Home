import React from 'react';
import Button1 from '../components/Button1';
import styles from '../styles/index.module.css';
import StrokeDiv from '../components/StrokeDiv.js';

function Home() {
    return (
        <div className='select-block'>
            <noscript>V.1.3</noscript>
            <div className={styles['header1']}>
                <img src='./1-logo.svg'></img>
                <div>
                    <a><h3 className='active'>Início</h3></a>
                    <a><h3>Sobre nós</h3></a>
                    <a><h3>Blog</h3></a>
                    <Button1>Fale conosco</Button1>
                </div>
            </div>
            <StrokeDiv />
        </div>
    );
}

export default Home;

