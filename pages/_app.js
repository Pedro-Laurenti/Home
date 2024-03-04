import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import Header from '../components/Header.js';

class MyApp extends App     {
    render() {
        const { Component, pageProps } = this.props;

        return (
        <>
            <Head>
                <title>Therapies Love Kids</title>
                <noscript>V.1.0</noscript>
            </Head>

            <Header />

            <Component {...pageProps} />
        </>
        );
    }
}

export default MyApp;