import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Control Your Financial Future
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Easily manage your transactions and investments with BinexoPay.
            </p>
            <Link to="features" smooth={true} duration={500} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
