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

const HackathonPage = (props: any) => {
    const slug = "hackathon2024";
    const eventMetadata: EventMetadata[] = getEventMetadata();
    const content = getPageContent(slug);

    const event = eventMetadata.find((e) => e.slug === slug);
    
    if (!event) return null; //prevents build-time crash (cannot build without this)

    return (
        <div className="relative w-full h-full">
            {event.poster.endsWith(".mp4") ? (
                // If poster is an MP4, show video background
                <video 
                    className="fixed top-0 left-0 w-full h-full object-cover z-0" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src={event.poster} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                // If poster is a JPG/PNG, show image background
                <div 
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${event.poster})` }}
                ></div>
            )}

            {/* Dark Overlay for Text Visibility */}
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 via-black/40 to-transparent z-0"></div>

            {/* Scrollable Content */}
            <div className="relative z-10 text-white text-center px-4 py-16 min-h-screen">
                <div className="py-10 mx-6 md:mx-[25%]">
                    {eventMetadata.map((event) => (
                        <div key={event.slug}>
                            <h1 className="md:text-8xl text-6xl font-croc-logo drop-shadow-md">{event.title}</h1>
                            <p className="md:text-2xl text-xl text-croc-blue font-croc-title">{event.date}</p>
                            {event.countdownto !== "NA" && <Countdown targetDate={event.countdownto} />}
                            <p className="italic md:text-2xl text-xl py-3">{event.subtitle}</p>
                        </div>
                    ))}
                    
                    <article className="prose-hackathon prose-img:w-full max-w-none text-center">
                        <Markdown>{content}</Markdown>
                    </article>

                    {event.tickets && event.tickets.trim() !== "" && (
                        <div className="text-center mt-4">
                            <a href={event.tickets} target="_blank" rel="noopener noreferrer">
                                <button className="bg-white text-croc-dark-blue px-5 py-2 rounded-full drop-shadow-md hover:bg-croc-blue hover:text-white font-croc-head text-2xl">
                                    TICKETS
                                </button>
                            </a>
                        </div>
                    )}
                </div> 
            </div>
        </div>
    );
};

export default HackathonPage;