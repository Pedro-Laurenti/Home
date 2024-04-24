import styles from './Grid.module.scss';
import Image from 'next/image';

import { useRef, useState, useEffect } from 'react';

export default function Grid() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#BC000A', '#E8B100', '#0095A5', '#008E2B'];

  const elements = [
    { title: 'Terapia Intensiva com Protocolo PediaSuit', imageSrc: '/13-fig-oferecemos.png' }, /*  */
    { title: 'Fisioterapia com protocolo Bobath', imageSrc: '/7-1-fig-oferecemos.png' },
    { title: 'Fonoaudiologia', imageSrc: '/10-fig-oferecemos.png' },
    { title: 'Musicoterapia', imageSrc: '/6-fig-oferecemos.png' },
    { title: 'Psicomotricidade', imageSrc: '/9-fig-oferecemos.png' },
    { title: 'Terapia Ocupacional', imageSrc: '/12-fig-oferecemos.png' },
    { title: 'Neuropsicopedagogia', imageSrc: '/8-1-fig-oferecemos.png' }, /* a */
    { title: 'Psicologia Infantil', imageSrc: '/11-fig-oferecemos.png' },
    { title: 'Psicoterapia ABA', imageSrc: '/5-fig-oferecemos.png' }
  ];

  return (
    <div className={styles.parte3}>
      <div className={styles.parte3back1}></div>
      <div className={styles.parte3back2}></div>
      <div className={styles.parte3wrapper}>
        <h1>O que oferecemos?</h1>
        <div className={styles.wrapperCellsPt3}>
          {elements.map((element, index) => (
            <div key={index} className={styles.cellPt3}>
              <div
                className={styles.ImgDad1}
                style={{
                  borderColor: colors[(currentColorIndex + index) % colors.length],
                  border: `2px solid ${colors[(currentColorIndex + index) % colors.length]}`
                }}
              >
                <div className={styles.WrapperImgPt3}>
                  <Image
                    className={styles.imges}
                    src={element.imageSrc}
                    width={300}
                    height={300}
                    alt="a"
                    quality={80}
                    sizes="30vw"
                    draggable="false"
                  />
                </div>
              </div>
              <h3 style={{ color: colors[(currentColorIndex + index) % colors.length] }}>{element.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}