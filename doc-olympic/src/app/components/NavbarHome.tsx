import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaGithub, FaInstagram, FaMedal, FaRobot, FaBars, FaTimes } from "react-icons/fa"; 

export default function NavHome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex justify-center fixed top-0 z-40">
      <Navbar
        isBordered
        className="w-full max-w-full rounded-lg py-4 px-6"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <div className="flex justify-between items-center w-full">
          <NavbarBrand className="flex items-center gap-2">
            <p className="font-bold text-inherit">Doc Olympic</p>
            <Link href="https://gemini.google.com/app?hl=es" aria-label="Gemini">
              <FaRobot size={24} color="white" />
            </Link>
          </NavbarBrand>

        
          <Button
            className="lg:hidden"
            auto
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
          </Button>
        </div>


        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:items-center lg:justify-center absolute lg:relative top-full left-0 w-full bg-black lg:bg-transparent lg:w-auto lg:p-0 lg:flex-row lg:gap-4`}>
          <NavbarContent className="flex flex-col lg:flex-row lg:gap-4 lg:items-center w-full lg:w-auto">
            <NavbarItem className="py-2 lg:py-0">
              <Link href="https://www.instagram.com/paris2024/" aria-label="Pagina Oficial">
                <FaInstagram size={24} color="white" />
              </Link>
            </NavbarItem>
            <NavbarItem className="py-2 lg:py-0">
              <Link href="https://olympics.com/es/paris-2024" aria-label="Juegos Olimpicos">
                <FaMedal size={24} color="white" />
              </Link>
            </NavbarItem>
            <NavbarItem className="py-2 lg:py-0">
              <Link href="https://github.com/tu-repositorio" aria-label="Repositorio">
                <FaGithub size={24} color="white" />
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
}



