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
                <noscript>V.1.1</noscript>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
            </Head>

            <Header />

            <Component {...pageProps} />
        </>
        );
    }
}

export default MyApp;