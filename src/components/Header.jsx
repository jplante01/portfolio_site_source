import { FaLinkedin, FaGithub, FaEnvelope, FaHome, FaUser, FaDev } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';

const NavIcon = ({ href, icon: Icon }) => {
  return (
    <li className="flex items-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="hover:text-indigo-700 transition-all duration-300 active:scale-95 active:text-indigo-800 flex items-center"
      >
        <Icon className="h-8 w-8" />
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md min-h-12 flex justify-end ">
      <nav className="flex justify-end pr-12 items-center self-stretch">
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