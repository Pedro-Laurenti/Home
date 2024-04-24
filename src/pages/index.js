import Head from 'next/head';
import { Link , Element } from "react-scroll";

import NextLink from 'next/link';
import { useRef, useState, useEffect } from 'react';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import Slider from '@components/Slider';
import Grid from '@components/Grid';
import Accordion from '@components/Accordion';

import styles from '@styles/Home.module.scss';

const Center = [-15.831363931968374, -48.613426638044366]
const markers = [
  { 
    name: '1', 
    coordinates: [-16.32624186589265, -48.95399414059945],
    description: 'Unidade Sede e Transdisciplinar (Centro)'
  },
  { 
    name: '2', 
    coordinates: [-16.326484291107626, -48.93804352814849],
    description: 'Unidade Multidisciplinar (Jundiai)'
  },
  { 
    name: '3', 
    coordinates: [-16.408290981950234, -49.217718345807526],
    description: 'Unidade Nerópolis'
  },
  { 
    name: '4', 
    coordinates: [-15.715403578121949, -49.32930504699492],
    description: 'Unidade Jaraguá'
  },
  { 
    name: '5', 
    coordinates: [-15.849428385464458, -48.03904422994031],
    description: 'Unidade Taguatinga'
  },
  { 
    name: '6', 
    coordinates: [-15.326978438580792, -49.13540008084957],
    description: 'Unidade Goianésia'
  }
];


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

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Therapies Love Kids</title>
        <meta name="description" content="Therapies Love Kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <div className={styles.parte1}>
          <div className={styles.contentParte1}>
              <h3>Clínica de Reabilitação Neurológica</h3>
              <img src='./2-letter-logo.svg' draggable="false"></img>
              <h2>Amor superando limites</h2>
              <Link
                activeClass="active"
                to="saiba-mais"
                smooth={true}
                offset={-250}
                duration={500}
                className={styles.btnSaiba}
              ><Button>Saiba mais</Button></Link>
          </div>
          <div className={styles.imgParte1} style={{ backgroundImage: `url(./3-img-parte-1.png)` }}></div>
          
        </div>
      </Section>

      <Element id="saiba-mais">
        <Section>
          <Container className={styles.parte2}>
            <h1>Especialidades Terapêuticas</h1>
            <div className={styles.sliderWrapper}>
                <Slider slides={slides}/>
            </div>
          </Container>
        </Section>
      </Element>


      <Grid />


      <Section>
          <h1>Perguntas frequentes</h1>
          <Accordion />
        
        <NextLink href="/sobre" className={styles.btnEntenta}>
          <Button>
              Mais dúvidas?
          </Button>
        </NextLink>
        
      </Section>

      <Section>
        <Container className={styles.homeMap}>
          <h1>Nossas unidades</h1>
          <Map
          center={Center}
          zoom={8}
          scrollWheelZoom={true}
          
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={{ lat: marker.coordinates[0], lng: marker.coordinates[1] }}>
                        <Popup>
                            {`Unidade ${marker.description}`}
                        </Popup>
                    </Marker>
                ))}
              </>
            )}
          </Map>

        </Container>
      </Section>
    </Layout>
  )
}
