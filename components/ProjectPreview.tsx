import Link from "next/link";
import { PageMetadata } from "./PageMetadata";

const ProjectPreview = (props: PageMetadata) => {
    return (
      <div className="rounded-3xl shadow-md
      bg-white mb-6 mx-3">
        <Link href={`/projects/${props.slug}`}>
          <img className="w-full aspect-[5/4] object-cover rounded-t-3xl" src={`${props.picture}`}></img>
          <div className="p-4">
            <h2 className="font-bold hover:text-croc-light-grey">{props.title}</h2>
            <p className="">{props.subtitle}</p>
          </div>
        </Link>
      </div>
    );
}

export default ProjectPreview;