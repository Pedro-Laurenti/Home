import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = () => {
    return (
        <div className={styles.accordionContainer}>
            <section className={styles.accordion}>
                <section className={`${styles.accordion} ${styles['accordion--radio']}`}>
                    
                    <div className={styles.tab}>
                        <input type="radio" name="accordion-2" id="rd1"/>
                        <label htmlFor="rd1" className={styles['tab__label']}>
                            O QUE O PROTOCOLO TRANSDISCIPLINAR? 
                        </label>
                        <div className={styles['tab__content']}>
                            <p>É uma abordagem que busca a intercomunicação entre diversas disciplinas para tratamento integrado de crianças. Ao contrário da abordagem multidisciplinar, a transdisciplinariedade não delimita fronteiras entre disciplinas, buscando soluções globais para os déficits da criança. É um protocolo intensivo, com 20 a 40 horas semanais, e segue os princípios das Práticas Baseadas em Evidências (PBE), com recomendação da ABPMC, para promover a estimulação de todos os âmbitos desenvolvimentais da criança. </p>
                        </div>
                    </div>

                    <div className={styles.tab}>
                        <input type="radio" name="accordion-2" id="rd2"/>
                        <label htmlFor="rd2" className={styles['tab__label']}>
                            O QUE O PROTOCOLO MULTIDISCIPLINAR? 
                        </label>
                        <div className={styles['tab__content']}>
                            <p>Neste protocolo, apesar de manter suas áreas de atuação separadas, a intercomunicação e a colaboração entre os membros da equipe são cruciais para garantir que o paciente obtenha um tratamento técnico, eficaz e personalizado. Esse protocolo é fundamentado nos princípios das Práticas Baseadas em Evidências (PBE) e da Análise do Comportamento Aplicada (ABA). É especialmente recomendado para crianças que já possuem um repertório global de desenvolvimento, mas que apresentam lacunas específicas em suas habilidades.</p>
                        </div>
                    </div>
                    
                    <div className={styles.tab}>
                        <input type="radio" name="accordion-2" id="rd3"/>
                        <label htmlFor="rd3" className={styles['tab__label']}>
                            O QUE É BOBATH? 
                        </label>
                        <div className={styles['tab__content']}>
                            <p>A análise do comportamento aplicada, do inglês Applied Bhavior Analysis (ABA) consiste em uma disciplina científica onde, nela, há um ramo de ciência básica - conhecido como análise experimental do comportamento - do inglês experimental analysis of behavior. A ABA tem como foco a gestão da solução de problemas socialmente relevantes que abrange tanto as empresas, como as instituições públicas e, principalmente, na intervenção aos transtornos do espectro autista (TEA).<br />Ela estuda a interação do indivíduo com seu ambiente, sendo que as consequências dessas ações mantém (ou não) um comportamento. Conceitos como análise funcional, reforço positivo, reforço diferencial, extinção de comportamento e aproximação sucessiva vieram da Análise do Comportamento e são passíveis de aplicações nas intervenções com crianças neurotípicas e neuroatípicas.<br />A intervenção precoce a partir de práticas baseadas em evidências é fundamental para crianças com suspeita ou diagnóstico de TEA, bem como o treinamento e psicoeducação de pais/cuidadores. </p>
                            <h2>COMO FUNCIONA O TRATAMENTO?</h2>
                            <p> O tratamento visa ajudar o individuo a mudar suas posturas e seus movimentos anormais para que ele seja capaz através de uma maneira confortável a se adaptar ao ambiente e desenvolver uma melhor qualidade de realizar suas atividades funcionais. No Conceito Bobath são utilizados os seguintes equipamentos: bolas bobath, rolos, andadores, prancha de equilíbriopropriocepção, talas extensoras de membros superiores e inferiores, órteses suropodálicas, stand in tables, espelho, etc. </p>
                            <h2>QUAIS SÃO AS INDICAÇÕES?</h2>
                            <p> O Tratamento inclui técnicas de inibição, facilitação e estimulação, essas técnicas são ajustadas frequentemente de acordo com as necessidades de cada um dos pacientes atendidos. Os objetivos dessas técnicas são diminuir a espasticidade muscular e introduzir os movimentos automáticos e voluntários, a fim de preparar o paciente para os movimentos funcionais, onde o tônus anormal pode ser inibido e os movimentos mais normais, facilitados. A indicação de cada equipamento e de cada técnica que envolve o Conceito Bobath depende do diagnóstico, do comprometimento neuropsicomotor e da inabilidade dos movimentos de cada paciente que são atendidos pelo Fisioterapeuta. </p>
                        </div>
                    </div>

                    <div className={styles.tab}>
                        <input type="radio" name="accordion-2" id="rd4" />
                        <label htmlFor="rd4" className={styles['tab__label']}> O QUE É ABA? </label>
                        <div className={styles['tab__content']}>
                            <p> A análise do comportamento aplicada, do inglês Applied Bhavior Analysis (ABA) consiste em uma disciplina científica onde, nela, há um ramo de ciência básica - conhecido como análise experimental do comportamento - do inglês experimental analysis of behavior. A ABA tem como foco a gestão da solução de problemas socialmente relevantes que abrange tanto as empresas, como as instituições públicas e, principalmente, na intervenção aos transtornos do espectro autista (TEA). Ela estuda a interação do indivíduo com seu ambiente, sendo que as consequências dessas ações mantém (ou não) um comportamento. Conceitos como análise funcional, reforço positivo, reforço diferencial, extinção de comportamento e aproximação sucessiva vieram da Análise do Comportamento e são passíveis de aplicações nas intervenções com crianças neurotípicas e neuroatípicas. A intervenção precoce a partir de práticas baseadas em evidências é fundamental para crianças com suspeita ou diagnóstico de TEA, bem como o treinamento e psicoeducação de pais/cuidadores. </p>
                            <h2>O MÉTODO - INTERVENÇÃO</h2>
                            <p> A intervenção ABA é realizada através de uma avaliação inicial minuciosa do comportamento da pessoa - importante ressaltar que esta avaliação não consiste em um único dia de terapia. Dependendo da criança, por exemplo, a avaliação pode levar um mês. Esta avaliação levará o terapeuta à identificar os comportamentos que estão em déficit e que, em geral, estão muito relacionados à interação social e à linguagem; bem como o excesso - comportamento estereotipado, interesse restrito a certos temas ou objetos, apego excessivo a rotinas, comportamento autolesivo e até mesmo agressivo. Passada a avaliação inicial, um plano de intervenção individual é elaborado pelo profissional, em que ele mostra aos responsáveis e até mesmo à criança, o que está em déficit e, à partir daí, passa a trabalhar para a redução deste déficit. Esse plano de ação é reavaliado periodicamente, ou seja, todo o tratamento é constituido por etapas e metas a serem alcançadas. </p>
                            <h2>INDICAÇÕES</h2>
                            <p>A terapia e intervenção em ABA é indicada para todas as idades, sem nenhuma restrição. Porém, quanto antes o início, mais rápido, fácil e eficaz será o tratamento. Também é indicada para a contribuição com a solução de qualquer problema que permeie o comportamento do indivíduo: adesão a tratamento médico, obesidade, gestão de pessoas, intervenção ao desenvolvimento atrasado, terapia individual de adultos ou crianças sem diagnóstico, programação do ensino especial ou regular, desempenho de alto rendimento no esporte, comportamento do consumidor, para citar apenas alguns exemplos. As possibilidades são ilimitadas. </p>
                        </div>
                    </div>

                    <div className={styles.tab}>
                        <input type="radio" name="accordion-2" id="rd5" />
                        <label htmlFor="rd5" className={styles['tab__label']}> O QUE É O PROTOCOLO PEDIASUIT? </label>
                        <div className={styles['tab__content']}>
                            <p> Criado em 2006 por um brasileiro, para utilizar na reabilitação do seu filho que têm paralisia cerebral, o PediaSuit é uma vestimenta ortopédica e proprioceptiva, para ser utilizada na terapia intensiva com o Protocolo PediaSuit.

                            Propriocepção ou Cinestesia, é a capacidade que temos de reconhecer a localização espacial do nosso corpo, sua posição, orientação, a força exercida pelos músculos e a posição de cada parte do corpo em relação às demais, sem utilizar a visão.

                            A vestimenta é composta de: chapéu, colete, short, joelheiras e calçados adaptados, que são interligados por tiras elásticas.

                            Um princípio básico do PediaSuit é criar um suporte para que o corpo seja alinhado o mais próximo do funcional possível, gerando também uma descarga de peso que é essencial para a regulação do tônus muscular e para a função vestibular e sensorial, essa descarga é gerada pelo ajuste das tiras elásticas e podem variar de 15 a 40 kg. </p>

                            <h2>O QUE É TERAPIA INTENSIVA?</h2>
                            <p> É a associação do uso da órtese proprioceptiva (vestimenta ortopédica descrita a cima) com um protocolo de terapia intensiva, no qual esse protocolo têm uma duração de 4 semanas, com a realização de sessões diárias de 4 horas e após as 4 semanas, são realizadas mais 2 semanas de tratamento diário de 1 hora, que faz parte de um período que chamamos de “manutenção”, que serve para uma consolidação de tudo que foi ganho pelo paciente até o momento. Esse protocolo de terapia intensiva visa o desenvolvimento motor, o reforço muscular, o equilíbrio e a coordenação do indivíduo, sendo realizado através da utilização mútua da roupa do PediaSuit e a Gaiola de Atividades. Após uma Avaliação realizada por um profissional, o Protocolo PediaSuit inicia-se com aquecimento e exercícios terapêuticos, após isso é vestido o macacão (vestimenta ortopédica descrita a cima) no paciente que realizará, durante as próximas horas, atividades/exercícios de fortalecimentos muscular, além de atividades para a melhora da habilidade motora, como do equilíbrio, controle postural, coordenação e marcha. Durante essas horas de atividades intensivas, uma pausa de 15 minutos é feita para a criança lanchar e então retomar as atividades até o final da sessão, onde nos minutos finais o ritmo da terapia é reduzido para que a criança desacelere para poder concluir a terapia do dia. </p>

                            <h2>QUAIS SÃO OS BENEFÍCIOS DO PROTOCOLO PEDIASUIT</h2>
                            <p> Quais são as indicações e os benefícios do Protocolo PediaSuit? A utilização do macacão associado a fisioterapia intensiva (terapia intensiva) tem tido muitos resultados positivos, sendo benéfico então para crianças com diversos tipos de diagnósticos, como:
                            </p>
                            <ul>
                                <li> Paralisia Cerebral</li>
                                <li> Atraso do Desenvolvimento Motor</li>
                                <li> Síndrome de Down</li>
                                <li> Deficiências ortopédicas e neurológicas</li>
                                <li> Hipotonia</li>
                                <li> Autismo</li>
                                <li> Acidente Vascular Encefálico</li>
                                <li> Entre outros</li>
                            </ul>
                            <p>Os benefícios também são vários, como:</p>
                            <ul>
                                <li> Melhora do alinhamento corporal</li>
                                <li> Melhora da densidade óssea</li>
                                <li> Melhora do tônus muscular</li>
                                <li> Diminuição das contrações</li>
                                <li> Auxilia a correção do padrão de marcha</li>
                                <li> Melhora o equilíbrio</li>
                                <li> Melhora a coordenação</li>
                                <li> Melhora a consciência corporal</li>
                                <li> Entre outros</li>
                            </ul>
                            <p> Porém, precisamos nos informar também quanto às contraindicações para este tipo de tratamento e também as precauções de alguns casos, como para qualquer outro tratamento. O Protocolo PediaSuit, é hoje um método de grande procura pelas famílias de todos os lugares do Brasil e do mundo, devido ao seu excelente desempenho nos resultados obtidos pelos pacientes que participam da terapia intensiva através deste método. É importante ressaltar também que é necessário que o profissional seja certificado no método para executar o Protocolo PediaSuit.
                            </p>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Accordion;