import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          BinexoPay
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
          >
            Reviews
          </Link>
        </div>

        {/* Download Now Button */}
        <div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-yellow-500 transition duration-300">
            <FaDownload />
            <span>Download Now</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="block py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            className="block py-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Reviews
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
