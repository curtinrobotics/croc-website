import Link from "next/link";
import { PageMetadata } from "./PageMetadata";

const ProjectPreview = (props: PageMetadata) => {
    return (
      <div className="rounded-3xl overflow-hidden shadow-xl relative group border-2 border-croc-blue">
        <Link href={`/projects/${props.slug}`}>
          <div className="absolute inset-0 bg-croc-very-dark-blue dark:bg-croc-very-dark-blue-dm opacity-20 md:opacity-50 group-hover:opacity-10 transition duration-300 z-10"></div>
          <img className="w-full aspect-[4/3] object-cover object-bottom" src={`${props.picture}`}></img>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20">
            <h1 className="text-4xl font-croc-logo drop-shadow-md">{props.title}</h1>
            <p className="text-xl font-croc-paragraph drop-shadow-md">{props.subtitle}</p>
          </div>
        </Link>
      </div>
    );
}

export default ProjectPreview;