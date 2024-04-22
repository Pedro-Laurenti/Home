import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = () => {

    const [checkedId, setCheckedId] = useState(null);

    const handleCheckboxChange = (id) => {
        if (id === checkedId) {
            setCheckedId(null); // Desmarca o checkbox se ele já estiver marcado
        } else {
            setCheckedId(id); // Marca o checkbox clicado
        }
    };

    return (
        <div className={styles.accordionContainer}>
            <section className={styles.accordion}>
                <section className={`${styles.accordion} ${styles['accordion--radio']}`}>
                    
                    <div className={styles.tab}>
                        <input
                            type="checkbox"
                            name="accordion-2"
                            id="rd1"
                            className="accordion-checkbox"
                            checked={checkedId === 'rd1'}
                            onChange={() => handleCheckboxChange('rd1')}

                        />
                        <label htmlFor="rd1" className={styles['tab__label']}>
                        MULTIDISCIPLINAR ou TRANSDISCIPLINAR?
                        </label>
                        <div className={styles['tab__content']}>
                        <p>Ao buscar o melhor atendimento para seu filho, você se depara com termos como "multidisciplinar" e "transdisciplinar". Mas qual a real diferença entre eles?</p>

                        <p>Em resumo, o foco faz toda a diferença:</p>

                        <h2>Multidisciplinar</h2>

                        <ul>
                            <li><b>Foco nas áreas de especialização:</b> Cada profissional atua em sua área específica, elaborando um plano individualizado para a criança.</li>

                            <li><b>Trabalho em paralelo:</b> O foco está na expertise individual, com menor integração entre os profissionais.</li>

                            <li><b>Exemplo:</b> Uma criança com autismo pode ter acompanhamento de psicopedagogo, fisioterapeuta e fonoaudiólogo, cada um com seu plano de intervenção.</li>
                        </ul>

                        <h2>Transdisciplinar</h2>

                        <ul>
                            <li><b>Foco nas necessidades da criança como um todo:</b> A equipe trabalha em conjunto para criar um plano holístico e individualizado.</li>

                            <li><b>Trabalho em conjunto:</b> Há um compartilhamento de conhecimentos e habilidades, com foco na interdisciplinaridade.</li>

                            <li><b>Exemplo:</b> A mesma criança com autismo teria um plano único e integrado, elaborado por toda a equipe em conjunto, considerando suas necessidades específicas.</li>
                        </ul>

                        <h4>Qual a melhor opção?</h4>

                        <p>A escolha depende das necessidades da criança. Em alguns casos, o atendimento multidisciplinar pode ser suficiente. Já em outros, a abordagem transdisciplinar, mais completa e integrada, pode trazer melhores resultados.</p>
                        </div>
                    </div>
                    
                    <div className={styles.tab}>
                        <input
                            type="checkbox"
                            name="accordion-2"
                            id="rd3"
                            className="accordion-checkbox"
                            checked={checkedId === 'rd3'}
                            onChange={() => handleCheckboxChange('rd3')}
                        />
                        <label htmlFor="rd3" className={styles['tab__label']}>
                            O QUE É BOBATH? 
                        </label>
                        <div className={styles['tab__content']}>
                        <h2>Principais características do Bobath</h2>
                        <ul>
                            <li><b>Foco:</b> Facilitar o movimento motor e inibir movimentos e posturas anormais.</li>
                            <li><b>Objetivo:</b> Estimular e aumentar a capacidade do indivíduo para realizar movimentos funcionais o mais próximo da normalidade possível.</li>
                            <li><b>Indicações:</b> Distúrbios de movimento, função e controle postural, devido a uma lesão do sistema nervoso central.</li>
                            <li><b>Como funciona:</b> Técnicas de inibição, facilitação e estimulação, utilizando bolas, rolos, andadores, pranchas de equilíbrio, etc.</li>
                        </ul>
                        </div>
                    </div>

                    <div className={styles.tab}>
                        <input
                            type="checkbox"
                            name="accordion-2"
                            id="rd4"
                            className="accordion-checkbox"
                            checked={checkedId === 'rd4'}
                            onChange={() => handleCheckboxChange('rd4')}
                        />
                        <label htmlFor="rd4" className={styles['tab__label']}> O QUE É ABA? </label>
                        <div className={styles['tab__content']}>
                        <h2>Principais características do protocolo ABA</h2>
                        
                        <ul>
                            <li><b>Foco:</b> Gestão da solução de problemas socialmente relevantes, incluindo empresas, instituições públicas e intervenção em TEA.</li>
                            <li><b>Objetivo:</b> Mudar comportamentos através de princípios como análise funcional, reforço positivo, extinção de comportamento e aproximação sucessiva.</li>
                            <li><b>Indicações:</b> TEA, desenvolvimento atrasado, obesidade, gestão de pessoas, ensino especial, desempenho esportivo, comportamento do consumidor, entre outros.</li>
                            <li><b>Como funciona:</b> Avaliação minuciosa do comportamento, plano de intervenção individualizado, reavaliação periódica e metas a serem alcançadas.</li>
                        </ul>
                        
                        
                        </div>
                    </div>

                    <div className={styles.tab}>
                        <input
                            type="checkbox"
                            name="accordion-2"
                            id="rd5"
                            className="accordion-checkbox"
                            checked={checkedId === 'rd5'}
                            onChange={() => handleCheckboxChange('rd5')}
                        />
                        <label htmlFor="rd5" className={styles['tab__label']}> O QUE É O PROTOCOLO PEDIASUIT? </label>
                        <div className={styles['tab__content']}>

                        <h2>PediaSuit</h2>
                        <ul>
                            <li><b>Foco:</b> Desenvolvimento motor, reforço muscular, equilíbrio e coordenação.
                            </li>
                            <li><b>Objetivo:</b> Alinhar o corpo o mais próximo do funcional possível, regular o tônus muscular e melhorar a função vestibular e sensorial.
                            </li>
                            <li><b>Indicações:</b> Paralisia Cerebral, Atraso do Desenvolvimento Motor, Síndrome de Down, Deficiências ortopédicas e neurológicas, Hipotonia, Autismo, AVC, entre outros.
                            </li>
                            <li><b>Como funciona:</b> Protocolo de terapia intensiva de 4 semanas com sessões diárias de 4 horas, seguido de 2 semanas de 1 hora por dia. A terapia utiliza uma vestimenta ortopédica e proprioceptiva (PediaSuit) e a Gaiola de Atividades.</li>
                        </ul>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Accordion;