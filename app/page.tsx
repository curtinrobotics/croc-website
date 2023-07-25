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
    <>
      <div className="w-full relative">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute opacity-50"></div>
        <img className="w-full h-screen object-cover object-[center]" src="images/cover_2.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pl-10 text-white justify-center text-center md:text-left">
          <h1 className="md:text-8xl text-7xl font-croc-logo">
            Welcome to CRoC</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph">
            Build Robots, Make Friends</p> 
          <p className="md:text-3xl text-2xl font-thin">
            Build Nights Thursday 6pm</p> 
        </div>
      </div>
      <div className="w-full relative">
        <Link href="project-home">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute hover:opacity-30 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[3/1] aspect-[3/2] object-cover object-bottom" src="images/coverimage.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pr-10 text-white justify-center text-center md:text-right">
          <h1 className="md:text-8xl text-5xl font-croc-logo">
            Eager to Build?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph">
            Check out our projects</p> 
        </div>
        </Link>
      </div>
      <div className="w-full relative">
        <Link href="https://croc.tidyhq.com/public/schedule/events">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute hover:opacity-30 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[3/1] aspect-[3/2] object-cover object-bottom" src="images/cover_3.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pl-10 text-white justify-center text-center md:text-left">
          <h1 className="md:text-8xl text-5xl font-croc-logo">
            What`s On?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph">
            See our events</p> 
        </div>
        </Link>
      </div>
      <div className="w-full relative">
        <Link href="/about-us">
        <div className="w-full h-full bg-croc-dark-blue top-0 left-0 absolute hover:opacity-30 duration-300 opacity-50"></div>
        <img className="w-full md:aspect-[7/4] aspect-[3/2] object-cover object-center" src="images/cover_4.jpg"></img>
        <div className="w-full flex flex-col absolute top-1/3 left-0 md:pr-10 text-white justify-center text-center md:text-right">
          <h1 className="md:text-8xl text-5xl font-croc-logo">
            Who are we?</h1>
          <p className="md:text-4xl text-3xl font-croc-paragraph">
            Find out more about us</p> 
        </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
