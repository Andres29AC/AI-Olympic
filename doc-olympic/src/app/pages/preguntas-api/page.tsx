import React from 'react';
import PreguntasApi from '../../components/PreguntasApi';
import NavbarPreguntas from '../../components/NavbarPreguntas';
const PreguntasApiPage: React.FC = () => {
  return (
    <>
      <NavbarPreguntas />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center">
        <PreguntasApi />
      </div>
    </>
  );
};

export default PreguntasApiPage;
