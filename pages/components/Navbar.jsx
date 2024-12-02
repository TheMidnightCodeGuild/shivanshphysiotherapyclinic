import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-100  h-20 sm:h-20 w-full z-50 border-b-2 border-neutral-100 fixed top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center mt-6 sm:mt-5">
            <Link href="/">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={150}
                height={50}
                className="object-cover w-72 h-20 sm:w-72 sm:h-20"
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-[#FAD5A5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-800 mt-6">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-8 w-8"
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
              ) : (
                <svg
                  className="h-8 w-8"
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
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mt-6">
            <Link
              href="/procedures"
              className="text-gray-800 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Procedures
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Gallery
            </Link>
            <Link
              href="/enquire"
              className="text-gray-100 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-full text-base font-medium transition duration-300 border-2 border-orange-500 bg-orange-500 ">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-[#FAF9F6] overflow-y-auto transition duration-300 ease-in-out md:hidden z-50`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center pb-4 border-b border-gray-200">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={50}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col space-y-3 p-4">
              <Link
                href="/procedures"
                className="text-gray-800 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-md text-base border-b border-gray-200 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}>
                Procedures
              </Link>
              <Link
                href="/gallery"
                className="text-gray-800 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-md text-base border-b border-gray-200 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link
                href="/contactus"
                className="text-gray-800 hover:text-white hover:bg-[#FAD5A5] px-3 py-2 rounded-md text-base border-b border-gray-200 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}>
                Enquire Us
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
