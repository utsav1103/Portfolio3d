import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User, } from "lucide-react";
import React from "react";
import Link from "next/link";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokewidth={1.5} />;

    case "about":
      return <User className="w-full h-auto" strokewidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokewidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokewidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokewidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokewidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokewidth={1.5} />;
      case "resume":
        return <NotebookText className='w-full h-auto' strokewidth={1.5} />;
        
    default:
      return <Home className="w-full h-auto" strokewidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
        aria-label={label}
        name={label}
      >
        <sapn className="relative w-12 h-12 p-4">{getIcon(icon)}</sapn>
      </Link>
    </div>
  );
};

export default NavButton;
