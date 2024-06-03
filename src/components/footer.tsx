'use client';
import React from 'react';
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400 mr-16 text-sm">
            OpenAI © 2015–2024
          </div>
          <div className="flex space-x-7">
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <svg height="20" viewBox="0 0 248 204" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.7 202.7c88 0 136.2-72.9 136.2-136.2 0-2.1 0-4.2-.1-6.3 9.3-6.7 17.3-15 23.7-24.5-8.6 3.8-17.8 6.4-27.4 7.6 9.9-5.9 17.5-15.2 21.1-26.3-9.3 5.5-19.7 9.5-30.8 11.7-8.8-9.4-21.4-15.2-35.3-15.2-26.7 0-48.3 21.7-48.3 48.4 0 3.8.4 7.5 1.3 11C85 88.6 45.2 66.5 20.3 32.4c-4.1 7-6.4 15-6.4 23.6 0 16.3 8.3 30.7 20.9 39.1-7.7-.2-15-2.4-21.4-6v.6c0 22.7 16.1 41.7 37.5 46-3.9 1.1-8.1 1.6-12.4 1.6-3 0-5.9-.3-8.7-.8 5.9 18.4 23 31.8 43.3 32.2-15.8 12.4-35.8 19.8-57.5 19.8-3.7 0-7.3-.2-10.9-.6 20.5 13.1 44.8 20.8 71 20.8" fill="#ffffff"/>
              </svg>
            </a>
            <a href="https://youtube.com" className="text-white hover:text-gray-400">
              <FaYoutube size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" className="text-white hover:text-gray-400">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://tiktok.com" className="text-white hover:text-gray-400">
              <FaTiktok size={20} />
            </a>
            <a href="https://discord.com" className="text-white hover:text-gray-400">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
