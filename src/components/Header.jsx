import { FaLinkedin, FaGithub, FaEnvelope, FaHome, FaUser, FaDev } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';

const NavIcon = ({ href, icon: Icon }) => {
  return (
    <li className="flex items-center">
      <a
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
          <NavIcon href="#linkedin" icon={FaDev} />
          <NavIcon href="#github" icon={FaGithub} />
          <NavIcon href="#twitter" icon={BsTwitterX} />
          <NavIcon href="#contact" icon={FaEnvelope} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;