'use client';
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const eventsCultureQuestions = [
  {
    query: 'Si desea saber sobre los eventos culturales disponibles',
    example: '¿Cuales son los proyectos culturales disponibles?',
  },
  {
    query: 'Si deseas saber sobre la descripcion de un evento en concreto',
    example: 'descripcion del evento L\'Orchestre des Concerts de Poche'
  }
];

const preparationCenterQuestions = [
  {
    query: 'Si deseas los nombres de los centros de preparacion disponibles',
    example: 'dime los nombres de los centros de preparacion disponibles'
  },
  {
    query: 'Si deseas saber sobre la descripcion de un centro de preparacion en concreto',
    example: 'descripcion del centro de preparacion Gimnasio Serguei Vorontzov'
  },
  {
    query: 'Si deseas una caracteristica especial de un centro de preparacion',
    example: 'caracteristica especial del Estadio Camille Fournier'
  },
  {
    query: 'Si deseas la galeria de un centro de preparacion en concreto. Advertencia por ahora no se muestran las imagenes en chat, te las muestra a manera de URLs',
    example: 'galeria de Estadio Camille Fournier'
  },
];

const competitionSiteQuestions = [
  {
    query: 'Si deseas saber los sitios de competencias disponibles',
    example: '¿Cuales son los sitios de competencia disponibles?'
  },
  {
    query: 'Si deseas saber sobre los deportes que practican en un sitio de competencia en concreto',
    example: 'Los deportes en el sitio de competencia La Concorde 2'
  }
];

const generalQuestions = [
  {
    query: 'Preguntale si es Doc Olympic o Gemini',
    example: '¿Eres Doc Olympic o Gemini?'
  },
  {
    query: 'Saluda a Doc Olympic',
    example: 'Hola Doc Olympic'
  }
];

const questionsData = {
  'Eventos Culturales': eventsCultureQuestions,
  'Sitios de Preparacion': preparationCenterQuestions,
  'Sitios de Competencia': competitionSiteQuestions,
  'Doc Olympic': generalQuestions
};

const QuestionCard: React.FC<{ questions: { query: string, example: string }[] }> = ({ questions }) => (
  <Card css={{ marginBottom: '16px', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
    <CardBody>
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <strong>Query:</strong> {item.query}
          </div>
          {item.example && (
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <strong>Ejemplo:</strong> {item.example}
            </div>
          )}
        </div>
      ))}
    </CardBody>
  </Card>
);

const PreguntasApi: React.FC = () => (
  <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
    <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Preguntas Frecuentes</h1>
    <Tabs aria-label="Preguntas Frecuentes" css={{ width: '100%' }}>
      {Object.entries(questionsData).map(([key, questions]) => (
        <Tab key={key} title={key} css={{ marginBottom: '16px' }}>
          <QuestionCard questions={questions} />
        </Tab>
      ))}
    </Tabs>
  </div>
);

export default PreguntasApi;
