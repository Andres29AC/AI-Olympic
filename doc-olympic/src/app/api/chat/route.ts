// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
// import { getOlympicEventData } from '../../services/api_france/fetchOlympicData';
// import { getCentresPreparationData } from '../../services/api_france/fetchCentresPreparationData';
// import { getSiteCompetitionData } from '../../services/api_france/fetchSiteCompetitionData';

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// const buildGoogleGenAIPrompt = (messages: Message[]) => ({
//   contents: messages
//     .filter(message => message.role === 'user' || message.role === 'assistant')
//     .map(message => ({
//       role: message.role === 'user' ? 'user' : 'model',
//       parts: [{ text: message.content }],
//     })),
// });

// const handleOlympicQuery = async (query: string) => {
//   //NOTE: Querys de la API Site Competition
//   if (query.toLowerCase().includes('sitios de competencia') || query.toLowerCase().includes('lugares de competencia')) {
//     const sites = await getSiteCompetitionData();
//     const siteNames = sites.map(site => site.nom_site).filter(Boolean);
//     return `Los sitios de competencia disponibles son: ${siteNames.join(', ')}.`;
//   }
//   if (query.toLowerCase().includes('deportes en el sitio de competencia')) {
//     const siteName = query.split('deportes en el sitio de competencia')[1]?.trim();
//     if (!siteName) {
//       return 'Por favor, proporcione el nombre del sitio de competencia que desea consultar.';
//     }
//     const sites = await getSiteCompetitionData();
//     const site = sites.find(site => site.nom_site.toLowerCase() === siteName.toLowerCase());
//     return site ? `Los deportes en el sitio de competencia '${siteName}' son: ${site.sports || 'No hay deportes disponibles'}` : `No se encontro un sitio de competencia llamado '${siteName}'.`;
//   }
//   //NOTE: Querys de la API Centros de Preparacion
//   if (query.toLowerCase().includes('centros de preparacion') || query.toLowerCase().includes('centros de entrenamiento')) {
//     const centres = await getCentresPreparationData();
//     const centreNames = centres.map(centre => centre.title).filter(Boolean);
//     return `Los centros de preparacion disponibles son: ${centreNames.join(', ')}.`;
//   }
//   if (query.toLowerCase().includes('descripcion del centro de preparacion')) {
//     const centreName = query.split('descripcion del centro de preparacion')[1]?.trim();
//     if (!centreName) {
//       return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
//     }
//     const centres = await getCentresPreparationData();
//     const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
//     return centre ? `Descripcion del centro de preparacion '${centreName}': ${centre.description || 'No hay descripcion disponible'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
//   }
//   if (query.toLowerCase().includes('caracteristica especial del')) {
//     const centreName = query.split('caracteristica especial del')[1]?.trim();
//     if (!centreName) {
//       return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
//     }
//     const centres = await getCentresPreparationData();
//     const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
//     return centre ? `Caracteristica especial del '${centreName}': ${centre.special_features || 'No hay caracteristica disponible'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
//   }
//   if (query.toLowerCase().includes('galeria de')) {
//     const centreName = query.split('galeria de')[1]?.trim();
//     if (!centreName) {
//       return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
//     }
//     const centres = await getCentresPreparationData();
//     const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
//     return centre ? `Galeria de '${centreName}': ${centre.gallery.map(image => image.src).join(', ') || 'No hay imagenes disponibles'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
//   }
//   //NOTE: Querys de la API de Proyectos Culturales para los Juegos Olimpicos
//   if (query.toLowerCase().includes('proyectos culturales') || query.toLowerCase().includes('eventos culturales')) {
//     const events = await getOlympicEventData();
//     const projectNames = events.map(event => event.name).filter(Boolean);
//     return `Los proyectos culturales disponibles son: ${projectNames.join(', ')}.`;
//   }

//   if (query.toLowerCase().includes('disciplinas')) {
//     const events = await getOlympicEventData();
//     const disciplinesSet = new Set<string>();
//     events.forEach(event => {
//       if (Array.isArray(event.discipline)) {
//         event.discipline
//           .map(discipline => typeof discipline === 'string' ? discipline.trim().toLowerCase() : null)
//           .filter(Boolean)
//           .forEach(discipline => disciplinesSet.add(discipline));
//       }
//     });
//     const disciplines = Array.from(disciplinesSet).map(discipline =>
//       discipline.charAt(0).toUpperCase() + discipline.slice(1)
//     );
//     return `Las disciplinas de los proyectos olimpicos son: ${disciplines.join(', ')}.`;
//   }

//   if (query.toLowerCase().includes('descripcion del evento')) {
//     const eventName = query.split('descripcion del evento')[1]?.trim();
//     if (!eventName) {
//       return 'Por favor, proporcione el nombre del evento que desea consultar.';
//     }
//     const events = await getOlympicEventData();
//     const event = events.find(event => event.name.toLowerCase() === eventName.toLowerCase());
//     return event ? `Descripcion del evento '${eventName}': ${event.description || 'No hay descripcion disponible'}` : `No se encontro un evento llamado '${eventName}'.`;
//   }
//   //NOTE: Querys de Bienvenida

//   if (query.toLowerCase().includes('hola doc olympic')) {
//     return 'Hola, soy Doc Olympic. ¿En que puedo ayudarte?';
//   }
//   if (query.toLowerCase().includes('¿eres doc olympic o gemini?')) {
//     return 'Soy Doc Olympic, tu asistente especializado en informacion sobre los Juegos Olimpicos de Paris 2024. ¿En que puedo ayudarte hoy?';
//   }

//   return null;
// };

// export async function POST(req: Request) {
//   const { messages } = await req.json();
//   const userMessage = messages[messages.length - 1]?.content;

//   let responseText = await handleOlympicQuery(userMessage);

//   if (!responseText) {
//     const geminiStream = await genAI
//       .getGenerativeModel({ model: 'gemini-pro' })
//       .generateContentStream(buildGoogleGenAIPrompt(messages));

//     const stream = GoogleGenerativeAIStream(geminiStream);
//     return new StreamingTextResponse(stream);
//   }

//   return new Response(responseText);
// }

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { getOlympicEventData } from '../../services/api_france/fetchOlympicData';
import { getCentresPreparationData } from '../../services/api_france/fetchCentresPreparationData';
import { getSiteCompetitionData } from '../../services/api_france/fetchSiteCompetitionData';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});

interface Site {
  nom_site: string;
  sports?: string[];
}

interface Centre {
  title: string;
  description?: string;
  special_features?: string;
  gallery?: { src: string }[];
}

interface Event {
  name: string;
  description?: string;
  discipline?: string[];
}

const handleOlympicQuery = async (query: string) => {
  if (query.toLowerCase().includes('sitios de competencia') || query.toLowerCase().includes('lugares de competencia')) {
    const sites: Site[] = await getSiteCompetitionData();
    const siteNames = sites.map(site => site.nom_site).filter(Boolean);
    return `Los sitios de competencia disponibles son: ${siteNames.join(', ')}.`;
  }
  if (query.toLowerCase().includes('deportes en el sitio de competencia')) {
    const siteName = query.split('deportes en el sitio de competencia')[1]?.trim();
    if (!siteName) {
      return 'Por favor, proporcione el nombre del sitio de competencia que desea consultar.';
    }
    const sites: Site[] = await getSiteCompetitionData();
    const site = sites.find(site => site.nom_site.toLowerCase() === siteName.toLowerCase());
    return site ? `Los deportes en el sitio de competencia '${siteName}' son: ${site.sports?.join(', ') || 'No hay deportes disponibles'}` : `No se encontro un sitio de competencia llamado '${siteName}'.`;
  }
  if (query.toLowerCase().includes('centros de preparacion') || query.toLowerCase().includes('centros de entrenamiento')) {
    const centres: Centre[] = await getCentresPreparationData();
    const centreNames = centres.map(centre => centre.title).filter(Boolean);
    return `Los centros de preparacion disponibles son: ${centreNames.join(', ')}.`;
  }
  if (query.toLowerCase().includes('descripcion del centro de preparacion')) {
    const centreName = query.split('descripcion del centro de preparacion')[1]?.trim();
    if (!centreName) {
      return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
    }
    const centres: Centre[] = await getCentresPreparationData();
    const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
    return centre ? `Descripcion del centro de preparacion '${centreName}': ${centre.description || 'No hay descripcion disponible'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
  }
  if (query.toLowerCase().includes('caracteristica especial del')) {
    const centreName = query.split('caracteristica especial del')[1]?.trim();
    if (!centreName) {
      return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
    }
    const centres: Centre[] = await getCentresPreparationData();
    const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
    return centre ? `Caracteristica especial del '${centreName}': ${centre.special_features || 'No hay caracteristica disponible'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
  }
  if (query.toLowerCase().includes('galeria de')) {
    const centreName = query.split('galeria de')[1]?.trim();
    if (!centreName) {
      return 'Por favor, proporcione el nombre del centro de preparacion que desea consultar.';
    }
    const centres: Centre[] = await getCentresPreparationData();
    const centre = centres.find(centre => centre.title.toLowerCase() === centreName.toLowerCase());
    return centre ? `Galeria de '${centreName}': ${centre.gallery?.map(image => image.src).join(', ') || 'No hay imagenes disponibles'}` : `No se encontro un centro de preparacion llamado '${centreName}'.`;
  }
  if (query.toLowerCase().includes('proyectos culturales') || query.toLowerCase().includes('eventos culturales')) {
    const events: Event[] = await getOlympicEventData();
    const projectNames = events.map(event => event.name).filter(Boolean);
    return `Los proyectos culturales disponibles son: ${projectNames.join(', ')}.`;
  }
  if (query.toLowerCase().includes('descripcion del evento')) {
    const eventName = query.split('descripcion del evento')[1]?.trim();
    if (!eventName) {
      return 'Por favor, proporcione el nombre del evento que desea consultar.';
    }
    const events: Event[] = await getOlympicEventData();
    const event = events.find(event => event.name.toLowerCase() === eventName.toLowerCase());
    return event ? `Descripcion del evento '${eventName}': ${event.description || 'No hay descripcion disponible'}` : `No se encontro un evento llamado '${eventName}'.`;
  }

  if (query.toLowerCase().includes('hola doc olympic')) {
    return 'Hola, soy Doc Olympic. ¿En que puedo ayudarte?';
  }
  if (query.toLowerCase().includes('¿eres doc olympic o gemini?')) {
    return 'Soy Doc Olympic, tu asistente especializado en informacion sobre los Juegos Olimpicos de Paris 2024. ¿En que puedo ayudarte hoy?';
  }

  return null;
};

export async function POST(req: Request) {
  const { messages } = await req.json();
  const userMessage = messages[messages.length - 1]?.content;

  let responseText = await handleOlympicQuery(userMessage);

  if (!responseText) {
    const geminiStream = await genAI
      .getGenerativeModel({ model: 'gemini-pro' })
      .generateContentStream(buildGoogleGenAIPrompt(messages));

    const stream = GoogleGenerativeAIStream(geminiStream);
    return new StreamingTextResponse(stream);
  }

  return new Response(responseText);
}
