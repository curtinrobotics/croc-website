import Link from "next/link";
import React from "react";
import getPageMetadata from "../components/getPageMetadata";
import ProjectPreview from "../components/ProjectPreview";

const HomePage = () => {
  const pageMetadata = getPageMetadata();
  const pagePreviews = pageMetadata.map((page) => (
    <ProjectPreview key={page.slug} {...page} /> //imports information for project panels
  ));

  return (
    <div className="w-full min-h-screen bg-croc-very-dark-blue pb-16">
      {/* Hero Section */}
      <div className="w-full relative h-[70vh] md:h-[85vh] overflow-hidden mb-6">
        <div className="w-full h-full bg-gradient-to-b from-croc-dark-blue/40 to-croc-very-dark-blue/90 top-0 left-0 absolute z-10"></div>
        <img className="w-full h-full object-cover object-[center] animate-pulse-slow" src="images/cover_2.jpg" alt="CRoC Build Night"></img>
        <div className="w-full flex flex-col absolute top-1/2 -translate-y-1/2 left-0 md:pl-16 px-6 text-white z-20">
          <h1 className="md:text-8xl text-5xl font-croc-logo drop-shadow-2xl mb-4 tracking-tight">
            Welcome to CRoC
          </h1>
          <p className="md:text-4xl text-2xl font-croc-paragraph drop-shadow-md mb-2 text-croc-light-grey">
            Build Robots, Make Friends
          </p>
          <div className="inline-block mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3 w-max">
            <p className="md:text-2xl text-lg font-medium drop-shadow-md text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              Build Nights Thursday 6pm
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

        {/* Projects - Large Card */}
        <Link href="project-home" className="group relative rounded-3xl overflow-hidden col-span-1 md:col-span-2 row-span-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 block">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
          <img className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="images/coverimage.jpg" alt="Projects"></img>
          <div className="absolute bottom-0 left-0 p-10 z-20 transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h2 className="text-6xl font-croc-logo text-white drop-shadow-xl mb-2 group-hover:text-croc-blue transition-colors">Projects</h2>
            <p className="text-2xl font-croc-paragraph text-gray-200">Check out what we build ➔</p>
          </div>
        </Link>

        {/* Hackathon - Tall Card */}
        <Link href="/hackathon" className="group relative rounded-3xl overflow-hidden col-span-1 row-span-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 block">
          <div className="absolute inset-0 bg-gradient-to-t from-croc-dark-blue/90 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
          <img className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="images/cover_hackathon_2.jpg" alt="Hackathon"></img>
          <div className="absolute top-6 right-6 z-20">
            <span className="bg-croc-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">Challenge</span>
          </div>
          <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h2 className="text-5xl font-croc-logo text-white drop-shadow-xl mb-2">Hackathon</h2>
            <p className="text-xl font-croc-paragraph text-gray-200">Join our next challenge ➔</p>
          </div>
        </Link>

        {/* Events - Standard Card */}
        <Link href="https://croc.tidyhq.com/public/schedule/events" className="group relative rounded-3xl overflow-hidden col-span-1 md:col-span-2 row-span-1 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 block">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
          <img className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="images/cover_3.jpg" alt="Events"></img>
          <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 ease-out group-hover:translate-x-2 flex items-center justify-between w-full pr-10">
            <div>
              <h2 className="text-4xl font-croc-logo text-white drop-shadow-xl mb-1">Events</h2>
              <p className="text-xl font-croc-paragraph text-gray-200">See what's on calendar</p>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all backdrop-blur-sm">
              <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </Link>

        {/* About Us - Standard Card */}
        <Link href="/about-us" className="group relative rounded-3xl overflow-hidden col-span-1 row-span-1 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 block">
          <div className="absolute inset-0 bg-gradient-to-t from-croc-dark-blue/90 via-croc-dark-blue/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
          <img className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="images/cover_4.jpg" alt="About Us"></img>
          <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h2 className="text-4xl font-croc-logo text-white drop-shadow-xl mb-1">Who are we?</h2>
            <p className="text-xl font-croc-paragraph text-white/80">Find out more about us ➔</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default HomePage;
