"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 ">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold bg-linear-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
              Sanjana Sahani
            </h2>
            <p className="text-sm mt-1">
              Building modern Websites.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/about" className="hover:text-white transition">
              About
            </a>
             <a href="/skill" className="hover:text-white transition">
              Skill
            </a>
            <a href="/project" className="hover:text-white transition">
              Projects
            </a>
           
          </div>

           {/* Social Icons */}
                   <div className="mt-6 flex justify-center space-x-6">
                     <a href="https://www.linkedin.com/in/sanjana-sahani-b33b7423b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-2xl transition-colors">
                       <FaLinkedin />
                     </a>
                     <a href="https://github.com/SanjanaSahani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-2xl transition-colors">
                       <FaGithub />
                     </a>
                     <a href="https://www.instagram.com/_shimmerspirit_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl transition-colors">
                       <FaInstagram />
                     </a>
                     <a href="https://app.netlify.com/teams/sanjanasahani/overview" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-2xl transition-colors">
                       <SiNetlify />
                     </a>
                   </div>
        </div>

        <div className="border-t border-neutral-800 my-6"></div>

        <div className="text-center text-sm">
          © {new Date().getFullYear()} Sanjana. All rights reserved.
        </div>

      </div>
    </footer>
  );
}