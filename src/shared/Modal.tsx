import { useState } from 'react';
import Modal from '@davy-dev/react-modal-plugin';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modale</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Titre de la Modale"
        showCancelButton={true}
        cancelButtonText="Annuler"
        onCancel={closeModal}
      >
        <p>Contenu de la modale</p>
      </Modal>
    </div>
  );
};

export default App;