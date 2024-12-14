"use client"; // Add this at the top of the file

import { useState } from "react";
import Link from "next/link"; // Next.js Link component
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons v2

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // console.log(menuOpen); // Debug state toggle
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
            <img
            className="h-24 w-auto"
            src="/images/logo.png"
            alt="Logo"
            />

            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  About
                </Link>
                <Link href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Blog
                </Link>
              </div>
            </div>
            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <button
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white"
                aria-label="View notifications"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
              <img
                className="h-8 w-8 rounded-full"
                src="https://lh3.googleusercontent.com/a-/ALV-UjXDwLqmmcVq5TVSyY9SYj_ZXZdcaBieZykfUzQWvib3BHzDOfA=s48-p"
                alt="User"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
    <div className="sm:hidden text-center">
    <hr className="border-t border-white border-[0.1px] shadow-sm shadow-white" />
    {/* Full width container for the button */}
    <button
        onClick={toggleMenu}
        className="w-full p-4 text-gray-300 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
    >
        {menuOpen ? (
        <XMarkIcon className="h-6 w-6 mx-auto" />
        ) : (
        <Bars3Icon className="h-6 w-6 mx-auto" />
        )}
    </button>

    {menuOpen && (
        <div className="text-center px-4 py-2 space-y-1 bg-gray-800">
        <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white">
            Home
        </Link>
        <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white">
            About
        </Link>
        <Link href="/blog" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white">
            Blog
        </Link>
        </div>
    )}
    </div>

      </nav>
    </>
  );
}
