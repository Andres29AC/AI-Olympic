"use client"
import { useState } from 'react';
import axios from 'axios';
import ChatBubble from '../components/ChatBubble';
import SidebarChat from '../components/SidebarChat';
import { Icon } from '@iconify/react';
import CleanChat from '../utils/CleanChat';
import { useRouter } from 'next/navigation';

export default function Chat() {
  const [messages, setMessages] = useState<{ id: string; role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { id: new Date().toISOString(), role: 'user', content: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chat', { messages: [...messages, newMessage] });
      const responseData = response.data;
      setMessages([...messages, newMessage, { id: new Date().toISOString(), role: 'assistant', content: responseData }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCleanChat = () => {
    setMessages([]);
  };

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarChat isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col relative">
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <Icon icon="mdi:menu" className="text-xl" />
          </button>
          <button
            onClick={redirectToHome}
            className="p-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
          >
            <Icon icon="mdi:home" className="text-xl" />
          </button>
          <CleanChat onCleanChat={handleCleanChat} hasMessages={messages.length > 0} />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="mascota.png"
            alt="Mascota de Olimpiadas"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div className="relative flex-1 overflow-y-auto flex flex-col items-center py-6 px-4 space-y-4 z-10">
          {messages.map(m => (
            <ChatBubble
              key={m.id}
              role={m.role === 'user' ? 'User' : 'DocOlympic'}
              content={m.content}
            />
          ))}
        </div>

        <div className="relative flex flex-col items-center mb-6 px-4 z-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <input
              className="flex-1 border-none rounded-l-lg p-3 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={input}
              placeholder="Escribe tu consulta..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-r-lg w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <Icon icon="mdi:send" className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


