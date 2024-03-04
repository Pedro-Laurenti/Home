import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/global.css'; // Importação dos estilos globais

class MyApp extends App     {
    render() {
        const { Component, pageProps } = this.props;

        return (
        <>
            <Head>
                <title>Meu Aplicativo Next.js</title>
                {/* Metatags, links para fontes, etc., podem ser adicionados aqui */}
            </Head>
                {/* Componente que envolve todas as páginas */}
            <Component {...pageProps} />
                {/* Componentes de layout comuns, como rodapé, barra de navegação, etc., podem ser adicionados aqui */}
        </>
        );
    }
}

export default MyApp;