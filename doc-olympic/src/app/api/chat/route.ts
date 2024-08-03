import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { getOlympicEventData } from '../../services/api_france/fetchOlympicData';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});

const handleOlympicQuery = async (query: string) => {

  if (query.toLowerCase().includes('disciplinas')) {
    const events = await getOlympicEventData();
    const disciplines = events.map(event => event.discipline).filter(Boolean);
    return `Las disciplinas de los eventos olimpicos son: ${disciplines.join(', ')}.`;
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

