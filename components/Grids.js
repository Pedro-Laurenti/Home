import { useState } from 'react';
import styles from '../styles/index.module.css';

const Grid = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#BC000A', '#E8B100', '#0095A5', '#008E2B'];

  const nextColorIndex = (currentIndex) => {
    return (currentIndex + 1) % colors.length;
  };

  const changeColor = () => {
    setCurrentColorIndex(nextColorIndex(currentColorIndex));
  };

  const elements = [
    { title: 'Terapia Intensiva com Protocolo PediaSuit', imageSrc: 'caminho-da-imagem-1' },
    { title: 'Fisioterapia com protocolo Bobath', imageSrc: 'caminho-da-imagem-2' },
    { title: 'Fonoaudiologia', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Musicoterapia', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Psicomotricidade', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Terapia Ocupacional', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Neuropsicopedagogia', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Psicologia Infantil', imageSrc: 'caminho-da-imagem-3' },
    { title: 'Psicoterapia ABA', imageSrc: 'caminho-da-imagem-3' }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className="cell-pt-3"
          id={styles['cell-pt-3']}
          style={{ 
            borderColor: colors[(currentColorIndex + index) % colors.length],
            border: `2px solid ${colors[(currentColorIndex + index) % colors.length]}`
          }}
        >
          <img src={element.imageSrc}
          alt="a"></img>
          <h3>{element.title}</h3>
        </div>
      ))}
    </>
  );
}

export default Grid;