'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-black text-white">
      <div>
        {/* Navbar above the line */}
        <div className="flex justify-between items-center h-12 px-40">
          <div className="flex items-center space-x-4 ml-8">
            <Link href="/">
              <Image
                src="/image.jpg"
                alt="Logo"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <nav className="flex-1 flex justify-center space-x-8">
            <Link href="/research" className="text-white text-sm hover:text-white">
              Research
            </Link>
            <Link href="/products" className="text-white text-sm hover:text-white">
              Products
            </Link>
            <Link href="/safety" className="text-white text-sm hover:text-white">
              Safety
            </Link>
            <Link href="/company" className="text-white text-sm hover:text-white">
              Company
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mr-8">
            <FaSearch className="text-xl cursor-pointer" />
          </div>
        </div>
        {/* Line of the Navbar */}
        <div className="h-0.5 bg-gray-800 opacity-75 w-full"></div>
        {/* Sticky Navbar below the line */}
        <div className={`sticky top-12 bg-black p-4 px-40 ${isSticky ? 'sticky' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 px-10">
              <span className="text-sm">ChatGPT</span>
            </div>
            <nav className="flex space-x-8 mr-10">
              {/* Removed hover:underline */}
              <Link href="/overview" className="text-gray-500 hover:text-white text-sm">
                Overview
              </Link>
              <Link href="/team" className="text-gray-500 hover:text-white text-sm">
                Team
              </Link>
              <Link href="/enterprise" className="text-gray-500 hover:text-white text-sm" target="_blank">
                Enterprise
              </Link>
              <Link href="/pricing" className="text-gray-500 hover:text-white text-sm">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
