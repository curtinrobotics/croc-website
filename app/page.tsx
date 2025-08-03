import Link from "next/link";
import React from "react";
import getPageMetadata from "../components/getPageMetadata";
import ProjectPreview from "../components/ProjectPreview";

const HomePage = () => {
  const pageMetadata = getPageMetadata();
  const pagePreviews = pageMetadata.map((page) => (
    <ProjectPreview key={page.slug} {...page} />
  ));

  return (
    <div className="flex flex-col items-center space-y-8 px-2 md:px-4 pb-4 pt-10 md:pt-12">

      {/* Hero Section – nearly full width */}
      <div className="w-full max-w-screen-xl rounded-3xl overflow-hidden shadow-xl relative">
        <div className="absolute top-0 left-0 w-full h-full bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-50 rounded-3xl"></div>
        <img className="w-full h-[70vh] object-cover object-center" src="images/cover_2.jpg" />
        <div className="absolute top-1/3 left-0 w-full md:pl-10 px-4 text-white text-center md:text-left">
          <h1 className="md:text-8xl text-6xl font-croc-logo drop-shadow-md">Welcome to CRoC</h1>
          <p className="md:text-4xl text-2xl font-croc-paragraph drop-shadow-md">Build Robots, Make Friends</p>
          <p className="md:text-3xl text-xl font-thin drop-shadow-md">Build Nights Thursday 6pm</p>
        </div>
      </div>

      {/* 4 Panel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">

        {/* Each panel styled the same way, just different content */}

        {/* Projects */}
        <div className="rounded-3xl overflow-hidden shadow-xl relative group">
          <Link href="/project-home">
            <div className="absolute inset-0 bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-50 group-hover:opacity-10 transition duration-300 rounded-3xl z-10"></div>
            <img className="w-full aspect-[4/3] object-cover object-bottom" src="images/coverimage.jpg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20">
              <h1 className="text-4xl font-croc-logo drop-shadow-md">Projects</h1>
              <p className="text-xl font-croc-paragraph drop-shadow-md">Check out what we build</p>
            </div>
          </Link>
        </div>

        {/* Events */}
        <div className="rounded-3xl overflow-hidden shadow-xl relative group">
          <Link href="https://croc.tidyhq.com/public/schedule/events">
            <div className="absolute inset-0 bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-50 group-hover:opacity-10 transition duration-300 rounded-3xl z-10"></div>
            <img className="w-full aspect-[4/3] object-cover object-bottom" src="images/cover_3.jpg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20">
              <h1 className="text-4xl font-croc-logo drop-shadow-md">Events</h1>
              <p className="text-xl font-croc-paragraph drop-shadow-md">See what's on</p>
            </div>
          </Link>
        </div>

        {/* Hackathon */}
        <div className="rounded-3xl overflow-hidden shadow-xl relative group">
          <Link href="/hackathon">
            <div className="absolute inset-0 bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-50 group-hover:opacity-10 transition duration-300 rounded-3xl z-10"></div>
            <img className="w-full aspect-[4/3] object-cover object-bottom" src="images/cover_hackathon_2.jpg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20">
              <h1 className="text-4xl font-croc-logo drop-shadow-md">Hackathon</h1>
              <p className="text-xl font-croc-paragraph drop-shadow-md">Join our next Challenge</p>
            </div>
          </Link>
        </div>

        {/* About Us */}
        <div className="rounded-3xl overflow-hidden shadow-xl relative group">
          <Link href="/about-us">
            <div className="absolute inset-0 bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-50 group-hover:opacity-10 transition duration-300 rounded-3xl z-10"></div>
            <img className="w-full aspect-[4/3] object-cover object-center" src="images/cover_4.jpg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20">
              <h1 className="text-4xl font-croc-logo drop-shadow-md">Who are we?</h1>
              <p className="text-xl font-croc-paragraph drop-shadow-md">Find out more about us</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;