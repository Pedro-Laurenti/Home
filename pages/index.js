import React from 'react';
import Grid from '../components/Grids.js';
import Slider from '../components/Slider.js';
import styles from '../styles/index.module.css';


function Home() {

    const slides = [
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (1).svg'></img>
            <h2>CONCEITO NEUROEVOLUTIVO BOBATH</h2>
            <p>O Conceito ou Método Bobath se fundamenta na inibição dos padrões reflexos anormais e a facilitação dos movimentos normais. No Conceito Bobath, o paciente aprende a sensação do movimento, e não o movimento em si.</p>
        </div>,
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (2).svg'></img>
            <h2>ANÁLISE DE COMPORTAMENTO APLICADA</h2>
            <p>A Análise do Comportamento Aplicada, do inglês Applied Bhavior Analysis (ABA) consiste em uma disciplina científica onde, nela, há um ramo de ciência básica - conhecido como análise experimental do comportamento - do inglês Experimental Analysis of Behavior.</p>
        </div>,
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (3).svg'></img>
            <h2>PROTOCOLO PEDIASUIT</h2>
            <p>O PediaSuit é um método terapêutico holístico, desenvolvido nos anos 70 a partir de uma roupa russa para reabilitação de astronautas. Adaptado para tratar disfunções neurológicas, proporciona uma abordagem abrangente e eficaz, baseada na neutralização dos efeitos da falta de gravidade no espaço.</p>
        </div>,
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (4).svg'></img>
            <h2>Protocolo Transdisciplinar</h2>
            <p>A abordagem transdisciplinar integra diversas disciplinas no tratamento de crianças, diferindo da multidisciplinar ao não impor fronteiras disciplinares. Protocolo intensivo de 20-40 horas semanais, baseado em Práticas Baseadas em Evidências (PBE) e recomendado pela ABPMC, visa estimular todos os aspectos do desenvolvimento infantil para soluções globais.</p>
        </div>,
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (5).svg'></img>
            <h2>PROTOCOLO Multidisciplinar</h2>
            <p>Destaca-se a intercomunicação e colaboração entre membros da equipe para assegurar tratamento técnico e personalizado. Baseado em Práticas Baseadas em Evidências (PBE) e Análise do Comportamento Aplicada (ABA), é recomendado para crianças com lacunas específicas em habilidades, mas com repertório global de desenvolvimento.</p>
        </div>,
        <div className={styles['slider-cell']}>
            <img src='./3-icon-parte-2 (6).svg'></img>
            <h2>Integração Sensorial</h2>
            <p>O tratamento de integração sensorial visa melhorar respostas a estímulos sensoriais, usando atividades estruturadas para integrar informações como tato, audição e movimento. Direcionado a crianças com alterações sensoriais, busca promover um funcionamento equilibrado por meio de terapia específica e direcionada.</p>
        </div>,

    ];

    return (
        <>
            <div className={styles['parte-1']}>
                <div className={styles['content-parte-1']}>
                    <h2>Clínica de Reabilitação Neurológica</h2>
                    <img src='./2-letter-logo.svg' draggable="false"></img>
                    <h3>Amor superando limites</h3>
                </div>
                <div className={styles['img-parte-1']}></div>
            </div>

            <div className={styles['parte-2']}>

                <h1>Especialidades Terapêuticas</h1>

                <div className={styles['slider-wrapper']}>
                    <Slider slides={slides}/>
                </div>
            </div>

            <div className={styles['parte-3']}>
                <h1>O que oferecemos?</h1>

                    <div className={styles['wrapper-cells-pt-3']}>
                        <Grid />
                    </div>
                
            </div>
        </>
    );
}

export default Home;

