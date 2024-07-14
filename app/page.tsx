import Link from "next/link";
import React from "react";
import getPageMetadata from "../components/getPageMetadata";
import ProjectPreview from "../components/ProjectPreview";

const HomePage = () => {
  const pageMetadata = getPageMetadata();
  const pagePreviews = pageMetadata.map((page) => (
    <ProjectPreview key={page.slug} {...page}/> //imports information for project panels
  ));

  return (
    <div className="">
      <div className="w-full relative">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute opacity-50"></div>
        <img className="w-full h-screen object-cover object-[center]" src="images/cover_2.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pl-10 text-white justify-center text-center md:text-left">
          <h1 className="md:text-8xl text-7xl font-croc-logo drop-shadow-md">
            Welcome to CRoC</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph drop-shadow-md">
            Build Robots, Make Friends</p> 
          <p className="md:text-3xl text-2xl font-thin drop-shadow-md">
            Build Nights Thursday 6pm</p> 
        </div>
      </div>
      <div className="w-full relative group">
        <Link href="project-home">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute duration-300 opacity-50 group-hover:opacity-10"></div>
        <img className="w-full md:aspect-[3/1] aspect-[3/2] object-cover object-bottom" src="images/coverimage.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pr-10 text-white justify-center text-center md:text-right">
          <h1 className="md:text-8xl text-5xl font-croc-logo drop-shadow-md">
            Eager to Build?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph drop-shadow-md">
            Check out our projects</p> 
        </div>
        </Link>
      </div>
      <div className="w-full relative group">
        <Link href="https://croc.tidyhq.com/public/schedule/events">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute group-hover:opacity-10 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[3/1] aspect-[3/2] object-cover object-bottom" src="images/cover_3.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pl-10 text-white justify-center text-center md:text-left">
          <h1 className="md:text-8xl text-5xl font-croc-logo drop-shadow-md">
            What`s On?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph drop-shadow-md">
            See our events</p> 
        </div>
        </Link>
      </div>
      <div className="w-full relative group">
        <Link href="/hackathon">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute group-hover:opacity-10 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[3/1] aspect-[3/2] object-cover object-bottom" src="images/cover_hackathon_2.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pr-10 text-white justify-center text-center md:text-right">
          <h1 className="md:text-8xl text-5xl font-croc-logo drop-shadow-md">
            Want a Challenge?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph drop-shadow-md">
            See our next Hackathon</p> 
        </div>
        </Link>
      </div>
      <div className="w-full relative group">
        <Link href="/about-us">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute group-hover:opacity-10 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[7/4] aspect-[3/2] object-cover object-center" src="images/cover_4.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pl-10 text-white justify-center text-center md:text-left">
          <h1 className="md:text-8xl text-5xl font-croc-logo drop-shadow-md">
            Who are we?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph drop-shadow-md">
            Find out more about us</p> 
        </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
