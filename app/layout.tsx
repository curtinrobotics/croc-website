"use client";

import Link from "next/link";
import "../app/globals.css";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { FaInstagram, FaLink, FaFacebook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const header = (
    <header className="fixed top-0 left-0 w-full border-b-2 border-croc-blue bg-black/60 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center w-[90%] mx-auto py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img className="w-20 hover:animate-spin-slow drop-shadow-md" src="images/CRoCLogo.png" alt="Logo" />
          <div className="ml-4 text-white font-croc-logo text-[2.6rem] leading-[0.6] flex flex-col drop-shadow-md">
            <span>Curtin</span>
            <span className="text-croc-blue">Robotics</span>
            <span>Club</span>
          </div>
          {/*<h1 className="text-6xl ml-4 text-white font-croc-logo inline-block md:hidden drop-shadow-md">
            CRoC
          </h1>*/}
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex xl:gap-8 gap-4 font-croc-paragraph text-white">
          <li><Link className="hover:text-croc-blue" href="/project-home">PROJECTS</Link></li>
          <li><a className="hover:text-croc-blue" href="https://croc.tidyhq.com/public/schedule/events">EVENTS</a></li>
          <li className="relative">
            <Link className="hover:text-croc-blue" href="/hackathon">HACKATHON</Link>
          </li>
          <li><Link className="hover:text-croc-blue" href="/about-us">ABOUT US</Link></li>
          <a href="https://croc.tidyhq.com/public/membership_levels">
            <button className="bg-white text-croc-dark-blue px-6 rounded-full drop-shadow-md hover:bg-croc-blue hover:text-white">
              SIGN UP
            </button>
          </a>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-6 right-6 text-4xl"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <Link href="/project-home" className="hover:text-croc-blue" onClick={toggleMenu}>PROJECTS</Link>
          <a href="https://croc.tidyhq.com/public/schedule/events" className="hover:text-croc-blue" onClick={toggleMenu}>EVENTS</a>
          <Link href="/hackathon" className="hover:text-croc-blue" onClick={toggleMenu}>HACKATHON</Link>
          <Link href="/about-us" className="hover:text-croc-blue" onClick={toggleMenu}>ABOUT US</Link>
          <a href="https://croc.tidyhq.com/public/membership_levels">
            <button className="bg-white text-croc-dark-blue px-6 py-3 rounded-full drop-shadow-md hover:bg-croc-blue hover:text-white">
              SIGN UP
            </button>
          </a>
        </div>
      </nav>
    </header>
  );

  const footer = (
    <footer className="bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">

        {/* Left Side: Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Find Us:</h3>
          <p className="text-sm">Building 215, Engineering Pavilion, Curtin University Bentley</p>
          <Link href="/about-us">
            <p className="text-sm hover:text-croc-blue transition-colors">Contact Us: contact@curtinrobotics.org</p>
          </Link>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-6">
          {/* Facebook */}
          <a href="https://www.facebook.com/CurtinRoboticsClub/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
            <FaFacebook />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/curtinroboticsclub/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
            <FaInstagram />
          </a>
          {/* Linktree */}
          <a href="https://linktr.ee/curtinroboticsclub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
            <SiLinktree className="text-2xl text-gray-400 hover:text-white" />
          </a>
          {/* TidyHQ */}
          <a href="https://croc.tidyhq.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <span className="font-bold">tidy</span>hq
          </a>
        </div>

      </div>
    </footer>
  );

  return (
    <html>
      <head>
        <title>CRoC</title>
      </head>
      <body className="bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm">
        <div className="min-h-screen flex flex-col">
          {header}
          <div className="flex-grow bg-croc-dark-blue dark:bg-croc-dark-blue-dm z-0 pt-20">
            <div className="bg-fixed insert-0 bg-[url(/images/croc-bg.png)] top-0 left-0 w-full h-full bg-cover">
              {children}
            </div>
          </div>
          {/*<div className="relative z-20">
            <UpcomingEvents />
          </div>*/}
          {footer}
        </div>
      </body>
    </html>
  );
}
