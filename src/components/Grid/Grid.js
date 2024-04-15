import { useState } from 'react';
import styles from './Grid.module.scss';

const Grid = () => {
const [currentColorIndex, setCurrentColorIndex] = useState(0);
const colors = ['#BC000A', '#E8B100', '#0095A5', '#008E2B'];

const elements = [
    { title: 'Terapia Intensiva com Protocolo PediaSuit', imageSrc: '13-fig-oferecemos.png' },
    { title: 'Fisioterapia com protocolo Bobath', imageSrc: '7-fig-oferecemos.png' },
    { title: 'Fonoaudiologia', imageSrc: '10-fig-oferecemos.png' },
    { title: 'Musicoterapia', imageSrc: '6-fig-oferecemos.png' },
    { title: 'Psicomotricidade', imageSrc: '9-fig-oferecemos.png' },
    { title: 'Terapia Ocupacional', imageSrc: '5-fig-oferecemos.png' },
    { title: 'Neuropsicopedagogia', imageSrc: '8-fig-oferecemos.png' },
    { title: 'Psicologia Infantil', imageSrc: '11-fig-oferecemos.png' },
    { title: 'Psicoterapia ABA', imageSrc: '12-fig-oferecemos.png' }
];

return (
    <>
    {elements.map((element, index) => (
        <div key={index} className={styles.cellPt3}>
            <div className={styles.ImgDad1} style={{ borderColor: colors[(currentColorIndex + index) % colors.length], border: `2px solid ${colors[(currentColorIndex + index) % colors.length]}`}} >
                <div className={styles.WrapperImgPt3}>
                    <img src={element.imageSrc} alt="a"/>
                </div>
            </div>
        <h3 style={{color: colors[(currentColorIndex + index) % colors.length]}}>{element.title}</h3>
        </div>
    ))}
    </>
);
}

export default Grid;