"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const ModalContact: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        auto
        flat
        color="primary"
        onPress={onOpen}
        className="text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-300 flex items-center"
       >
        <FaEnvelope className="mr-2 text-xl" />
        Contacts
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        width="600px"
        hideCloseButton
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <ModalContent
            className="bg-gray-700 bg-opacity-100 rounded-lg shadow-lg p-6"
            style={{ maxHeight: '80vh', margin: 'auto' }}
          >
            <>
              <ModalHeader className="w-full flex justify-center border-b border-gray-600 pb-4">
                <h2 className="text-2xl font-bold text-white">Contacts</h2>
              </ModalHeader>
              <ModalBody className="w-full flex flex-col items-center justify-center overflow-auto">
                <a
                  href="mailto:andredeveloper92@gmail.com"
                  className="flex items-center text-blue-300 hover:underline mb-4"
                >
                  <FaEnvelope className="mr-2 text-xl" />
                  andredeveloper92@gmail.com
                </a>
                <a
                  href="https://github.com/Andres29AC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-300 hover:underline mb-4"
                >
                  <FaGithub className="mr-2 text-xl" />
                  github.com/Andres29AC
                </a>
              </ModalBody>
              <ModalFooter className="w-full flex justify-center space-x-4">
                <Button
                  color="error"
                  variant="light"
                  onPress={() => onOpenChange(false)}
                  auto
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
};

export default ModalContact;
