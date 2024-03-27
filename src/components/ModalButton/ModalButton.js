import { useState } from 'react';
import Button from '@components/Button';
import ModalContato from '@components/ModalContato';

const ModalButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>Fale Conosco</Button>
      <ModalContato isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
};

export default ModalButton;