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
        <h1 className="md:mx-14 md:text-left text-center text-white md:text-7xl text-6xl font-croc-logo">Projects</h1>
        <div className="md:mx-10 mx-5 py-6 grid grid-cols-2 md:grid-cols-3">{pagePreviews}</div>
    </>
  );
};

export default ProjectHome;