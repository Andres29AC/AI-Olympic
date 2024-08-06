'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const SidebarChat = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/pages/preguntas-api', label: 'Preguntas API', icon: 'mdi:help-circle' },
  ];

  return (
    <div className={`fixed inset-0 z-50 flex ${isOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out`}>
      <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700 text-xl font-semibold flex items-center">
          Doc Olympic
          <img src="/ai.png" alt="Doc Olympic" className="w-8 h-8 mr-2 rounded-full" />
          <button onClick={onClose} className="ml-auto">
            <Icon icon="mdi:close" className="text-white text-2xl" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={`p-4 border-b border-gray-700 ${pathname === item.href ? 'bg-gray-700' : ''}`}>
                {item.isButton ? (
                  <button onClick={() => alert('Nuevo boton clickeado')} className="flex items-center w-full">
                    <Icon icon={item.icon} className="mr-3" />
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href} className="flex items-center w-full">
                    <Icon icon={item.icon} className="mr-3" />
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};

export default SidebarChat;
