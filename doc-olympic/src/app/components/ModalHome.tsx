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
    window.location.href = 'https://data.paris2024.org/explore/dataset/paris-2024-evenements-olympiade-culturelle/api/?disjunctive.nom_de_la_structure_c&disjunctive.public_adresse_c&disjunctive.departement&disjunctive.commune&disjunctive.tarif_du_projet_c&disjunctive.discipline_principale_du_projet_c'; 
  };

  return (
    <>
      {!modalOpen && (
        <Button className="info-modal-button bg-green-500 text-white font-bold py-2 px-4 rounded" color="primary" onPress={handleOpen} auto>
          View Event Details
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
              <p className="mb-4 text-lg text-center">
                Discover the exciting cultural events happening at the Paris 2024 Olympics.
              </p>
              <div className="flex justify-center mb-4">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  style={{ width: '100px', height: '100px' }}
                  className="rounded-md shadow-lg"
                />
              </div>
              <p className="mb-4 text-center">
                Explore various cultural showcases, exhibitions, and performances that celebrate the essence of the Olympics in Paris. Don't miss out on these amazing events!
              </p>
              <p className="text-center">
                From historical exhibitions to live performances, the Paris 2024 Olympics will feature a rich tapestry of cultural experiences. Join us in celebrating the spirit of the Games!
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
                API
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
