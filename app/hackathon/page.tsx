import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Countdown from '@/components/Countdown';
import getEventMetadata from "@/components/getEventMetadata";
import { EventMetadata } from "@/components/EventMetadata";

const getPageContent = (slug: string) => {
    const folder = "events/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult.content;
};

const HackathonPage = (props : any) => {
    const slug = "hackathon2024";
    const eventMetadata: EventMetadata[] = getEventMetadata();
    const content = getPageContent(slug);
    return (
        <div className="md:bg-[url('/images/Hackathon2024_wide.png')] bg-[url('/images/Hackathon_2024_tall.png')] bg-fixed bg-cover bg-center">
            <div className="py-10 px-4 mx-6 md:mx-[25%] min-h-screen">  
                {eventMetadata.map((event) => (
                    <div key={event.slug}>
                        <h1 className="md:text-8xl text-6xl font-croc-logo drop-shadow-md text-white text-center">{event.title}</h1>
                        <p className="md:text-2xl text-xl text-croc-blue font-croc-title text-center">{event.date}</p>
                        <Countdown targetDate={event.countdownto} />
                        <p className="italic md:text-2xl text-xl text-white py-3 text-center">{event.subtitle}</p>
                    </div>
                ))}
                <article className="prose-hackathon prose-img:w-full max-w-none text-left">
                    <Markdown>{content}</Markdown>
                </article>
                <div className="text-center">
                    <a href="https://croc.tidyhq.com/public/schedule/events/64269-hackathon-sem-2/carts/new">
                        <button className="bg-white text-croc-dark-blue px-5 py-2 rounded-full drop-shadow-md hover:bg-croc-blue hover:text-white mt-4 font-croc-head text-2xl">
                            TICKETS
                        </button>
                    </a>
                </div>
            </div> 
        </div>
    );
};

export default HackathonPage;