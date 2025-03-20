import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHome, FaUser } from "react-icons/fa";


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
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10 min-h-12 flex justify-end items-center">
      <nav className="flex justify-end pr-12 items-center self-stretch">
        <ul className="flex space-x-8 items-center">
          <NavIcon href="#linkedin" icon={FaLinkedin} />
          <NavIcon href="#github" icon={FaGithub} />
          <NavIcon href="#twitter" icon={FaTwitter} />
          <NavIcon href="#contact" icon={FaEnvelope} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;