import fs from "fs";
import matter from "gray-matter";
import { PageMetadata } from "./PageMetadata";

const getPageMetadata = (): PageMetadata[] => {
  const folder ="projects/";
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".md"));
    
  // Get grey-matter from markdown files for projects
  const projects = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      picture: matterResult.data.picture,
      slug: fileName.replace(".md", ""),
    };
  });
  
  return projects;
};

export default getPageMetadata