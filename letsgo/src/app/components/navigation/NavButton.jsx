import { Github, Home, Linkedin, NotebookText, Palette, Phone, Scale, Twitter, User, } from "lucide-react";
import React from "react";
import Link from "next/link";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";


const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;

    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
      case "resume":
        return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;
        
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: {scale: 0},
  show: {scale: 1}
}
//define the motion to use with link because link is a component we can't use motion.Link
const NavLink = motion.create(Link);
const NavButton = ({ x, y, label, link, icon, newTab, labelDirection='right' }) => {
  return (
    <ResponsiveComponent>

      {
        ({size}) => {
          return size && size >= 480 ?
          <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <NavLink
      variants={item}
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground  rounded-full flex items-center justify-center custom-bg"
        aria-label={label}
        name={label}
      >
        <sapn className="relative  w-10 h-10 p-3 animate-spin-slow-reverse group-hover:pause hover:text-accent">{getIcon(icon)}

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>

        


        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          {label}
        </span>

        </sapn>

        

      </NavLink>
    </div>

          :
          <div
      className=" w-fit cursor-pointer z-50"
      
    >
      <NavLink
      variants={item}
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground  rounded-full flex items-center justify-center custom-bg"
        aria-label={label}
        name={label}
      >
        <sapn className="relative  w-9 h-9 xs:w-12 xs:h-12 p-2.5 xs:p-3   hover:text-accent">{getIcon(icon)}

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>

        


        <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap", labelDirection === "left" ? "right-full left-auto" : "")}>
          {label}
        </span>

        </sapn>

        

      </NavLink>
    </div>
        }
      }
  

    </ResponsiveComponent>
  );
};

export default NavButton;
