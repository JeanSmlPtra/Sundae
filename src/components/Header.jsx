import React from 'react';

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 w-full bg-transparent text-white p-5 z-10 justify-end pr-[300px]"> 
      <nav className="mt-5">
        <a href="#home" className="mr-4 hover:underline text-white text-2xl">Home</a>
        <a href="#about" className="mr-4 hover:underline text-white text-2xl">About</a>
        <a href="#about" className="mr-4 hover:underline text-white text-2xl">Menu</a>
        <a href="#contact" className="hover:underlinev text-white text-2xl">Best Seller</a>
        <a href="#contact" className="hover:underline text-white pl-4 text-2xl">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
