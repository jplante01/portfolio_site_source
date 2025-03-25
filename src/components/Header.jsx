import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDev, FaTimes } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { Check, Copy } from 'lucide-react';

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

const EmailCopyForm = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jeffrey@jplante.dev';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-md items-center rounded-md border border-gray-300 bg-white shadow-sm overflow-hidden">
        <input
          type="text"
          readOnly
          value={email}
          className="w-full px-4 py-2 focus:outline-none text-gray-800"
          onClick={(e) => e.target.select()}
        />
        <button
          onClick={handleCopy}
          className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 transition-colors duration-200"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
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
<a
  className="sm:hidden pr-6 pt-6 z-50 hover:text-sky-400 cursor-pointer"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  {isMenuOpen ? (
    <FaTimes className="h-8 w-8 text-white" />
  ) : (
    <GrContact className="h-8 w-8 text-white" />
  )}
</a>

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
            <div className="flex flex-col p-4">
              <ul className="flex flex-row items-center space-x-6 p-8">
                <NavIcon href="#linkedin" icon={FaLinkedin} />
                <NavIcon href="https://dev.to/jplante01" icon={FaDev} />
                <NavIcon href="https://github.com/jplante01" icon={FaGithub} />
                <NavIcon href="https://x.com/jplante01454345" icon={BsTwitterX} />
              </ul>
              <EmailCopyForm />
            </div>
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
