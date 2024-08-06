"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import ModalContact from './ModalContact';

const NavbarPreguntas: React.FC = () => {
  const router = useRouter();

  const handleBrandClick = () => {
    router.push('/chat');
  };

  return (
    <Navbar shouldHideOnScroll isBordered variant="sticky" className="bg-gray-800 dark:bg-gray-900 shadow-md py-4 px-6">
      <NavbarBrand onClick={handleBrandClick} className="cursor-pointer flex items-center"> 
        <p className="text-white font-bold text-2xl">Doc Olympic</p>
        <img src="/ai.png" alt="Logo" className="h-10 mr-2" /> 
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-8 items-center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ModalContact />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarPreguntas;

