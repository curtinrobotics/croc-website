import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPageMetadata from "@/components/getPageMetadata";
import Link from "next/link";

const getPageContent = (slug: string) => {
    const folder = "about/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult.content;
};

const AboutPage = (props: any) => {
    const slug = "about";
    const content = getPageContent(slug);
    return (
        <div className="bg-croc-dark-blue py-6">
            <div className="bg-white py-5 px-8 rounded-3xl text-justify shadow-md mx-6 md:mx-[20%]">
                <article className="prose md:prose-xl prose-img:w-full max-w-none">
                    <Markdown>{content}</Markdown>
                </article>
            </div>
        </div>
    );
};

export default AboutPage;