import ReactModal from 'react-modal';
import Button from '@components/Button';

import styles from './ModalContato.module.scss';

import { FaWindowMinimize } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const ModalContato = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.modalOverlay}
      className={styles.modalContent}
    >
      <FaWindowMinimize onClick={onClose} className={styles.btnFechar}/>

      <div className={styles.columns}>
        <div className={styles.colunaEsquerda}>
          <div classname={styles.cellColumn}>
            <h3><b>Anápolis, Sede (Centro):</b></h3>
            <p>anapolis@therapieslovekids.com.br</p>
            <p>R. Primeiro de Maio - Centro, Anápolis - GO, 75020-050</p>
          </div>

          <div classname={styles.cellColumn}>
            <h3><b>Anápolis, Jundiaí:</b></h3>
            <p>anapolis2@therapieslovekids.com.br</p>
            <p>R. José Neto Paranhos - Jundiaí, Anápolis - GO, 75110-750</p>
          </div>

          <div classname={styles.cellColumn}>
            <h3><b>Brasília:</b></h3>
            <p>brasilia@therapieslovekids.com.br</p>
            <p>Qs 05 Rua 600 Lote 21 - Sala 301 à 304 e 314 à 318 - Taguatinga Sul, Brasília - DF, 71955-100</p>
          </div>

          <div classname={styles.cellColumn}>
            <h3><b>Nerópolis:</b></h3>
            <p>neropolis@therapieslovekids.com.br</p>
            <p>R. Aderbal Antunes Oliveira, 946 - Parque das Américas, Nerópolis - GO, 75460-000</p>
          </div>

          <div classname={styles.cellColumn}>
            <h3><b>Jaraguá:</b></h3>
            <p>jaragua@therapieslovekids.com.br</p>
            <p>R. João Pedro de Oliveira, 27 - Qd 02 Lt 07 - Setor Aeroporto, Jaraguá - GO, 76330-000</p>
          </div>

          <div classname={styles.cellColumn}>
            <h3><b>Goianésia:</b></h3>
              <section>
                <img src='./4-icon-new-popup.svg'></img>
                <p>Em breve!</p>
              </section>
          </div>

        </div>
        <div className={styles.colunaDireita}>
          <div>
            <Button href="https://wa.me/+558005917874"><FaWhatsapp/> Fale Conosco</Button>
            <section><FaPhone />0800 591 7874</section>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalContato;