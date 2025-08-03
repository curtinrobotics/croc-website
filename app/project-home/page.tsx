import Link from "next/link";
import React from "react";
import getPageMetadata from "../../components/getPageMetadata";
import ProjectPreview from "../../components/ProjectPreview";

const ProjectHome = () => {
  const pageMetadata = getPageMetadata();
  const pagePreviews = pageMetadata.map((page) => (
    <ProjectPreview key={page.slug} {...page}/> //imports information for project panels
  ));

  return (
    <>
      <div className="flex flex-col items-center space-y-8 px-2 pb-4">
        <h1 className="md:mx-14 mt-10 md:text-left text-center text-white md:text-7xl text-6xl font-croc-logo">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
          {pagePreviews}
        </div>
      </div>
    </>
  );
};

export default ProjectHome;