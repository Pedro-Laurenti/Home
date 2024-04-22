import LayoutSubpage from '../components/LayoutSubpage';
import Tab from '@components/Tab';
import styles from '@styles/subpage.module.scss'

 export default function Sobre() {
    const pageTitle = "Sobre nós";
    const pageDescription = "Política de privacidade";
    const title = "Sobre nós";

    const slidesSubpage = [
        
        
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(1).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(2).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(3).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(4).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(5).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(6).png'}/>
        </div>,
        <div className={styles.wrapperImgSlider}>
            <img src={'/sobre-nos(7).png'}/>
        </div>,
    ];

    const bodyContent = (
        <>
            <h1>Com o que trabalhamos?</h1>

            <p>A Clínica Therapies Love Kids dispõe de um portifólio de serviços terapêticos, realizados por uma equipe multidisciplinar altamente qualificada e eficiente, comprometida em oferecer tratamentos especializados com todo o carinho e dedicação.</p>

            <p>Ao iniciarmos o tratamento, realizamos uma avaliação multidisciplinar criteriosa, para que possamos estabelecer metas e condutas terapêuticas. Cada caso é estudado de forma individualizada, buscando entender a realidade de cada paciente, suas características e necessidades específicas. As recomendações de cada especialista são reunidas em um Plano Terapêutico que será a base de todo tratamento.</p>

            <p>Nas salas de atendimentos buscamos proporcionar ambientes acolhedores, lúdicos, alegres e seguros, para que os atendimentos possam ser realizados de maneira prazerosa e produtiva.</p>

            <h1>Multidisciplinar ou Transdisciplinar?</h1>

            <p>Ao buscar o melhor atendimento para seu filho, você se depara com termos como "multidisciplinar" e "transdisciplinar". Mas qual a real diferença entre eles?</p>

            <p>Em resumo, o foco faz toda a diferença:</p>

            <h2>Multidisciplinar</h2>

            <li><b>Foco nas áreas de especialização:</b> Cada profissional atua em sua área específica, elaborando um plano individualizado para a criança.</li>

            <li><b>Trabalho em paralelo:</b> O foco está na expertise individual, com menor integração entre os profissionais.</li>

            <li><b>Exemplo:</b> Uma criança com autismo pode ter acompanhamento de psicopedagogo, fisioterapeuta e fonoaudiólogo, cada um com seu plano de intervenção.</li>

            <h2>Transdisciplinar</h2>

            <li><b>Foco nas necessidades da criança como um todo:</b> A equipe trabalha em conjunto para criar um plano holístico e individualizado.</li>

            <li><b>Trabalho em conjunto:</b> Há um compartilhamento de conhecimentos e habilidades, com foco na interdisciplinaridade.</li>

            <li><b>Exemplo:</b> A mesma criança com autismo teria um plano único e integrado, elaborado por toda a equipe em conjunto, considerando suas necessidades específicas.</li>

            <h4>Qual a melhor opção?</h4>

            <p>A escolha depende das necessidades da criança. Em alguns casos, o atendimento multidisciplinar pode ser suficiente. Já em outros, a abordagem transdisciplinar, mais completa e integrada, pode trazer melhores resultados.</p>

            <h1>Especialidades Terapêuticas</h1>

            <h2>Bobath</h2>
                <li><b>Foco:</b> Facilitar o movimento motor e inibir movimentos e posturas anormais.</li>
                <li><b>Objetivo:</b> Estimular e aumentar a capacidade do indivíduo para realizar movimentos funcionais o mais próximo da normalidade possível.</li>
                <li><b>Indicações:</b> Distúrbios de movimento, função e controle postural, devido a uma lesão do sistema nervoso central.</li>
                <li><b>Como funciona:</b> Técnicas de inibição, facilitação e estimulação, utilizando bolas, rolos, andadores, pranchas de equilíbrio, etc.</li>

            <h2>ABA</h2>
                <li><b>Foco:</b> Gestão da solução de problemas socialmente relevantes, incluindo empresas, instituições públicas e intervenção em TEA.</li>
                <li><b>Objetivo:</b> Mudar comportamentos através de princípios como análise funcional, reforço positivo, extinção de comportamento e aproximação sucessiva.</li>
                <li><b>Indicações:</b> TEA, desenvolvimento atrasado, obesidade, gestão de pessoas, ensino especial, desempenho esportivo, comportamento do consumidor, entre outros.</li>
                <li><b>Como funciona:</b> Avaliação minuciosa do comportamento, plano de intervenção individualizado, reavaliação periódica e metas a serem alcançadas.
                </li>
            

            <h2>PediaSuit</h2>
                <li><b>Foco:</b> Desenvolvimento motor, reforço muscular, equilíbrio e coordenação.
                </li>
                <li><b>Objetivo:</b> Alinhar o corpo o mais próximo do funcional possível, regular o tônus muscular e melhorar a função vestibular e sensorial.
                </li>
                <li><b>Indicações:</b> Paralisia Cerebral, Atraso do Desenvolvimento Motor, Síndrome de Down, Deficiências ortopédicas e neurológicas, Hipotonia, Autismo, AVC, entre outros.
                </li>
                <li><b>Como funciona:</b> Protocolo de terapia intensiva de 4 semanas com sessões diárias de 4 horas, seguido de 2 semanas de 1 hora por dia. A terapia utiliza uma vestimenta ortopédica e proprioceptiva (PediaSuit) e a Gaiola de Atividades.
                </li>

            <h2>Quais planos de saúde atendemos?</h2>
        
            <Tab />

        </>
    );

    return (
        <LayoutSubpage
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            title={title}
            bodyContent={bodyContent}
            slidesSubpage={slidesSubpage}
        />
    )
}