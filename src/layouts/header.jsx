import { memo } from "react";
// Assets
import { FaGithub } from "react-icons/fa";

// Components
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import NavLinks from "@/components/ui/NavLinks";

const socialLinks = [
  {
    link: "https://github.com/SRIVASTAV26SANDESH",
    icon: <FaGithub size={15} />,
    name: "Github",
  },
];

const Header = memo(function Header({ setCursorVariant }) {
  const handleMouseEnter = () => setCursorVariant("text");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <header className="bg-background px-6 py-3 max-h-[60px] w-full z-50">
      <div className="container flex justify-between items-center max-sm:p-0">
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Logo />
        </span>
        <Navigation setCursorVariant={setCursorVariant} />
      </div>
    </header>
  );
});

function Logo() {
  return (
    <div className="logo cursor-pointer">
      <Link className="focusing" to="React-Projects/">
        <span className="font-mono">TON </span>
        <span className="font-micro text-[24px] text-primary ps-[1px]">
          Projects
        </span>
      </Link>
    </div>
  );
}

const Navigation = ({ setCursorVariant }) => {
  return (
    <nav className="flex items-center space-x-6">
      <div className="flex items-center gap-3">
        {socialLinks.map((social, index) => (
          <NavLinks
            key={index}
            link={social.link}
            icon={social.icon}
            name={social.name}
            setCursorVariant={setCursorVariant}
          />
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Header;
