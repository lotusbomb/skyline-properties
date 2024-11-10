'use client'

import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[20px] text-bluee">
              Skylineproperties
            </span>
            {menuOpen ? (
              <IoClose className="h-6 w-6 md:hidden" onClick={toggleMenu} />
            ) : (
              <IoMenu className="h-6 w-6 md:hidden" onClick={toggleMenu} />
            )}
            <nav className="hidden md:flex gap-6 items-center text-bluee ">
              <a href="#">About us</a>
              <a href="#">Contact us</a>
              <button className="bg-fadedblue text-bluee btn font-medium">
                View listings
              </button>
            </nav>

            {menuOpen && (
              <nav className=" flex flex-col absolute bg-bluee top-[100%] text-white shadow-lg leading-10 p-8 rounded-lg">
                <a href="#" onClick={toggleMenu}>
                  About us
                </a>
                <a href="#" onClick={toggleMenu}>
                  Contact us
                </a>
                <button
                  className="bg-fadedblue text-bluee px-2 rounded-sm font-medium mt-3"
                  onClick={toggleMenu}
                >
                  View listings
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar