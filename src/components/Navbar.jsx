import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-xl font-bold">Michael Wanot</div>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#about" className="hover:text-blue-700">About</a></li>
        <li><a href="#portfolio" className="hover:text-blue-700">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 