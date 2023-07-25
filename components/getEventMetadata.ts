import fs from "fs";
import matter from "gray-matter";
import { EventMetadata } from "./EventMetadata";

const getEventMetadata = (): EventMetadata[] => {
  const folder ="events/";
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".md"));
    
  // Get grey-matter from markdown files for projects
  const events = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`events/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });
  
  return events;
};

export default getEventMetadata