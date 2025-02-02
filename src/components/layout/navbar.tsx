import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
