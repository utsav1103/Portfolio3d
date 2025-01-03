"use client"
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const NavLink = motion.create(Link);
const HomeBtn = () => {
  return (
    <NavLink 
    
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{delay:1}}


    href={"/"}
    target={"_self"}
    className='text-foreground  rounded-full flex items-center justify-center custom-bg fixed left-4 top-4  self-start z-50 w-8 h-8 p-2 sm:w-8 sm:h-8 sm:p-2 md:w-10 md:h-10 md:p-2.5 lg:w-12 lg:h-12 lg:p-3 xs:w-14 xs:h-14 xs:p-4'

    aria-label={"home"}
    name={"home"}
    
    >
        <span className="relative w-full h-full flex items-center justify-center peer hover:text-accent">
            <Home className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xs:w-6 xs:h-6" strokeWidth={1.5} />

            <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                Home
            </span>
        </span>

    </NavLink>
  )
}

export default HomeBtn;
