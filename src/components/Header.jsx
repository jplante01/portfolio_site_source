import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDev, FaTimes } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
const NavIcon = ({ href, icon: Icon }) => {
  return (
    <li className="flex items-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="text-white hover:text-sky-400 transition-all duration-300 active:scale-95 active:text-indigo-800 flex items-center"
      >
        <Icon className="h-8 w-8" />
      </a>
    </li>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="backdrop-blur-sm min-h-12 flex justify-end items-center">
      {/* Mobile menu button - only visible on smaller screens */}
      <button className="sm:hidden pr-6 pt-6 z-50" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? (
          <FaTimes className="h-8 w-8 text-white" />
        ) : (
          <GrContact className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Mobile navigation - only shown when menu is open */}
      {isMenuOpen && (
        <>
          {/* Blurred background overlay - sized to viewport */}
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={toggleMenu}
            style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
          />

          {/* Menu */}
          <div
            className="sm:hidden fixed top-16 right-4 bg-transparent z-50 rounded-lg border-2 border-white
      transform transition-all duration-300 ease-out origin-top-right
      animate-slideIn"
            style={{
              animation: 'slideIn 0.3s ease-out forwards',
            }}
          >
            <ul className="flex flex-col items-center space-y-6 p-8">
              <NavIcon href="#linkedin" icon={FaLinkedin} />
              <NavIcon href="https://dev.to/jplante01" icon={FaDev} />
              <NavIcon href="https://github.com/jplante01" icon={FaGithub} />
              <NavIcon href="https://x.com/jplante01454345" icon={BsTwitterX} />
              <NavIcon href="#contact" icon={FaEnvelope} />
            </ul>
          </div>
        </>
      )}

      {/* Desktop navigation */}
      <nav className="sm:flex justify-end pr-12 pt-6 items-center self-stretch hidden">
        <ul className="flex space-x-8 items-center">
          <NavIcon href="#linkedin" icon={FaLinkedin} />
          <NavIcon href="https://dev.to/jplante01" icon={FaDev} />
          <NavIcon href="https://github.com/jplante01" icon={FaGithub} />
          <NavIcon href="https://x.com/jplante01454345" icon={BsTwitterX} />
          <NavIcon href="#contact" icon={FaEnvelope} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;