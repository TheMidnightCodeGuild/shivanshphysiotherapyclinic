import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FAF9F6] shadow-lg h-20 w-full z-50 border-b-2 border-neutral-400 fixed top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center mt-6">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="object-cover"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-[#005091] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mt-6">
            <Link
              href="/procedures"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Procedures
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Gallery
            </Link>
            <Link
              href="/enquire"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Enquire Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Links - Sliding from left */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#FAF9F6] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-50`}>
          <div className="flex flex-col pt-20 px-4 space-y-2">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md text-gray-800 hover:text-white hover:bg-[#005091]">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/procedures"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}>
              Procedures
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link
              href="/enquire"
              className="text-gray-800 hover:text-white hover:bg-[#005091] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}>
              Enquire Us
            </Link>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
