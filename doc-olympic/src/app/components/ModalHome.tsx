import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function InfoModal({ onModalOpenChange, isOpen }) {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const handleOpen = () => {
    setModalOpen(true);
    onModalOpenChange(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    onModalOpenChange(false);
  };

  const handleMoreInfo = () => {
    window.location.href = 'https://data.paris2024.org/explore/?sort=modified&exclude.theme=Geodata'; 
  };

  return (
    <>
      {!modalOpen && (
        <Button className="info-modal-button bg-blue-500 text-white font-bold py-2 px-4 rounded" color="primary" onPress={handleOpen} auto>
          Project Details
        </Button>
      )}
      <Modal isOpen={modalOpen} onOpenChange={handleClose} width="600px" hideCloseButton>
        <ModalContent 
          className="bg-black bg-opacity-90 rounded-lg shadow-lg z-40 flex flex-col items-center justify-center p-6" 
          style={{ maxHeight: '95vh' }} 
        >
          <>
            <ModalHeader className="w-full flex justify-center">
              <h2 className="text-2xl font-bold text-primary">Juegos Olimpicos Paris 2024</h2>
            </ModalHeader>
            <ModalBody className="w-full flex flex-col items-center justify-center overflow-auto">

              <div className="flex justify-center mb-4">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  style={{ width: '100px', height: '100px' }}
                  className="rounded-md shadow-lg"
                />
              </div>
              <p className="mb-4 text-center">
               Consulta sobre los Proyectos Culturales planteados para los Juegos Olimpicos Paris 2024, asi como sobre los Centros de Preparacion y Sitios de Competicion
              </p>
              <p className="text-center">
                Este proyecto integra APIs publicas proporcionadas por la organizacion de los Juegos Olimpicos Paris 2024
              </p>
            </ModalBody>
            <ModalFooter className="w-full flex justify-center space-x-4">
              <Button 
                color="error" 
                variant="light" 
                onPress={handleClose} 
                auto 
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Close
              </Button>
              <Button 
                color="primary" 
                onPress={handleMoreInfo} 
                auto 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                APIs
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
