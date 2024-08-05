'use client';

import React, { useState } from 'react';
import { Button, Modal, Text } from '@nextui-org/react';

const PreguntasApi: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const preguntas = [
    { pregunta: 'Cuales son los proyectos culturales disponibles?', ejemplo: '' },
    { pregunta: 'Que disciplinas de los proyectos olimpicos estan disponibles en Paris 2024?', ejemplo: '' },
    { pregunta: 'Descripcion del evento L\'Orchestre des Concerts de Poche', ejemplo: 'Descripcion del evento L\'Orchestre des Concerts de Poche' },
    { pregunta: 'Dime los nombres de los centros de preparacion disponibles?', ejemplo: '' },
    { pregunta: 'Descripcion del centro de preparacion Gimnasio Serguei Vorontzov', ejemplo: 'Descripcion del centro de preparacion Gimnasio Serguei Vorontzov' },
    { pregunta: 'Caracteristica especial del Piscine Olympique d\'Antigone & Gymnase d\'Olympie', ejemplo: 'Caracteristica especial del Piscine Olympique d\'Antigone & Gymnase d\'Olympie' },
    { pregunta: 'Galeria de Estadio Camille Fournier', ejemplo: 'Galeria de Estadio Camille Fournier' },
    { pregunta: 'Cuales son los sitios de competencia disponibles?', ejemplo: '' },
    { pregunta: 'Los deportes en el sitio de competencia La Concorde 2', ejemplo: 'Los deportes en el sitio de competencia La Concorde 2' },
    { pregunta: 'Eres Doc Olympic o Gemini?', ejemplo: 'Hola doc olympic' },
  ];

  const handleClick = (pregunta: string) => {
    setModalContent(pregunta);
    setModalVisible(true);
  };

  return (
    <div>
      <h1>Preguntas API</h1>
      <ul>
        {preguntas.map((item, index) => (
          <li key={index}>
            <Button onClick={() => handleClick(item.ejemplo)}>{item.pregunta}</Button>
          </li>
        ))}
      </ul>
      <Modal open={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Header>
          <Text h4>Consulta</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>{modalContent}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setModalVisible(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PreguntasApi;
