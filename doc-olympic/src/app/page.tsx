'use client';
import React, { useState } from 'react';
import HeaderChat from './components/HeaderChat';
import InfoModal from './components/ModalHome';
import Image from 'next/image';
import NavHome from './components/NavbarHome';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpenChange = (isOpen) => {
    setModalOpen(isOpen);
  };

  return (
    <div className="relative w-full h-screen flex flex-col  items-center justify-center">
      {!isModalOpen && <NavHome />}
      
      <Image
        src="/back.jpg"
        alt="Olimpiadas Paris 2024"
        fill
        style={{ objectFit: 'cover' }} 
        className="absolute inset-0 z-0"
      />
      <div id="info-container" className="relative z-30 mb-7"> {}
        <InfoModal 
          onModalOpenChange={handleModalOpenChange} 
          isOpen={isModalOpen}
        />
        {}
      </div>
      {!isModalOpen && (
        <div id="chat-container" className="relative z-20 mt-7">
          <HeaderChat />
        </div>
      )}

    </div>
  );
}

