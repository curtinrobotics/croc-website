"use client";

import Link from "next/link"
import "../app/globals.css"
import React, { useState } from "react";
import Modal from "../components/Modal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const header = (
    <header className = "border-b border-croc-light-grey pt-1 pb-4">
      <nav className="flex justify-between item-center w-[92%] pt- mx-auto">
        <Link href="/">
          <img className="flex absolute mt-1 w-16 hover:animate-spin-slow drop-shadow-md" src="images/CRoCLogo.png"></img>
          <h1 className="text-6xl ml-20 text-white font-croc-logo hidden 2xl:inline-block drop-shadow-md">Curtin Robotics Club</h1>
          <h1 className="text-6xl ml-20 text-white font-croc-logo inline-block 2xl:hidden drop-shadow-md">CRoC</h1>
        </Link>
        <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex sm:flex-row flex-col sm:item-center gap-8 2xl:gap-[4vw] font-croc-paragraph text-white mt-3">
            <li>
              <a className="hover:text-croc-blue" href="/project-home">PROJECTS</a>
            </li>
            <li>
              <a className="hover:text-croc-blue" href="https://croc.tidyhq.com/public/schedule/events">EVENTS</a>
            </li>
            <li className="relative">
              <a className="hover:text-croc-blue" href="/hackathon">HACKATHON</a>
              <span className="absolute bottom-3 left-20 text-xs bg-croc-blue text-white px-2 py-1 rounded-full">NEW</span>
            </li>
            <li>
              <a className="hover:text-croc-blue" href="/about-us">ABOUT US</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="https://croc.tidyhq.com/public/membership_levels">
            <button className="bg-white text-base text-croc-dark-blue px-5 py-2 rounded-full drop-shadow-md hover:bg-croc-blue hover:text-white mt-4">Sign Up</button>
          </a>
        </div>
      </nav>
    </header>
  );

  const [open, setOpen] = useState<boolean>(true);
  <Modal open={open} onClose={()=> setOpen(false)}>Modal Content</Modal>

  const footer = (
    <footer>
      <div className="border-t border-croc-light-grey py-6 text-left px-8 text-croc-light-grey text-xs flex justify-between">
        <div>
        <h3>Find Us: Building 215 Engineering Pavilion, Curtin University Bentley</h3>
        <Link href="/about-us">
          <h3>Contact Us: contact@curtinrobotics.org</h3>
        </Link>
        </div>
        <Link href="https://www.facebook.com/CurtinRoboticsClub/">
          <img className="w-10" src="images/icon-fb.png"></img>
        </Link>
      </div>
    </footer>
  );

  return (
    <html>
      <head>
        <title>CRoC</title>
      </head>
      <body>
        <div className="bg-croc-very-dark-blue">
          {header}
          <div className="bg-croc-dark-blue">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  )
}
