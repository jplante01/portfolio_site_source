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
        className="text-gray-50 hover:text-sky-400 transition-all duration-300 active:scale-95 active:text-indigo-800 flex items-center"
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
    <div className="flex items-center justify-center pt-2">
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

// MobileMenu.jsx
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sm:hidden pr-6 pt-6 z-50 hover:text-sky-400 cursor-pointer">
      <a
        className="pr-6 pt-6 z-50 hover:text-sky-400 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className="h-8 w-8 text-white" />
        ) : (
          <GrContact className="h-8 w-8 text-white" />
        )}
      </a>

      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={toggleMenu}
            style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
          />
          <div
            className="fixed top-16 right-4 bg-transparent z-50 rounded-lg border-2 border-white
             transform transition-all duration-300 ease-out origin-top-right
             animate-slideIn"
            style={{
              animation: 'slideIn 0.3s ease-out forwards',
            }}
          >
            <div className="flex flex-col px-4 py-6">
              <span className="text-gray-50 text-xl font-bold">Socials</span>
              <ul className="flex flex-row items-center justify-between pt-2">
                <NavIcon href="#linkedin" icon={FaLinkedin} />
                <NavIcon href="https://dev.to/jplante01" icon={FaDev} />
                <NavIcon href="https://github.com/jplante01" icon={FaGithub} />
                <NavIcon href="https://x.com/jplante01454345" icon={BsTwitterX} />
              </ul>
              <span className="text-gray-50 text-xl pt-8  font-bold">Email</span>
              <EmailCopyForm />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
const EnvelopeIconWithDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="flex items-center relative">
      <a
        className="text-gray-50 hover:text-sky-400 transition-all duration-300 active:scale-95 active:text-indigo-800 flex items-center"
        onClick={toggleDropdown}
        aria-label="Contact me"
      >
        <FaEnvelope className="h-8 w-8" />
      </a>

      {isDropdownOpen && (
        <div
          className="fixed top-20 right-12 px-4 pt-12 pb-4 bg-transparent z-50 rounded-lg border-2 border-white
             transform transition-all duration-300 ease-out origin-top-right
             animate-slideIn"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-50 text-xl font-bold">Email:</span>
            <button
              onClick={toggleDropdown}
              className="text-gray-50 hover:text-sky-400 translate-y-[-38px] translate-x-[6px]"
              aria-label="Close"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <EmailCopyForm />
        </div>
      )}
    </li>
  );
};
// DesktopNav.jsx
const DesktopNav = () => {
  return (
    <nav className="sm:flex justify-end pr-12 pt-6 items-center self-stretch hidden">
      <ul className="flex space-x-8 items-center">
        <NavIcon href="#linkedin" icon={FaLinkedin} />
        <NavIcon href="https://dev.to/jplante01" icon={FaDev} />
        <NavIcon href="https://github.com/jplante01" icon={FaGithub} />
        <NavIcon href="https://x.com/jplante01454345" icon={BsTwitterX} />
        <EnvelopeIconWithDropdown />
      </ul>
    </nav>
  );
};

// Header.jsx
const Header = () => {
  return (
    <header className="backdrop-blur-sm min-h-12 flex justify-end items-center">
      <MobileMenu />
      <DesktopNav />
    </header>
  );
};

export default Header;
