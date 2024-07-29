//NOTE: Version gosu 2
'use client';

import { useChat } from 'ai/react';
import ChatBubble from '../components/ChatBubble';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="relative h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto flex flex-col items-center py-6 px-4 space-y-4">
        {messages.map(m => (
          <ChatBubble
            key={m.id}
            role={m.role === 'user' ? 'User' : 'DocOlympic'}
            content={m.content}
          />
        ))}
      </div>

      <div className="flex justify-center mb-6 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        >
          <input
            className="w-full border-none rounded-l-lg p-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            value={input}
            placeholder="Escribe tu consulta..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r-lg px-4 py-3 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
