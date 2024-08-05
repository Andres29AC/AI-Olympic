import { useState } from 'react';
import { Icon } from '@iconify/react';

type CleanChatProps = {
  onCleanChat: () => void;
  hasMessages: boolean; 
};

export default function CleanChat({ onCleanChat, hasMessages }: CleanChatProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (hasMessages) {
      setIsModalOpen(true);
    } else {
      setIsWarningModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsWarningModalOpen(false);
  };

  const handleConfirm = () => {
    onCleanChat();
    handleCloseModal();
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpenModal}
        className="bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 w-12 h-12 flex items-center justify-center"
      >
        <Icon icon="mdi:trash-can" className="text-2xl" />
      </button>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Confirmacion</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">¿Estas seguro de que deseas limpiar la conversacion? Esta accion no se puede deshacer.</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleConfirm}
                className="bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              >
                Confirmar
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}


      {isWarningModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advertencia</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Primero debes comenzar una conversacion antes de limpiar el chat.</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
