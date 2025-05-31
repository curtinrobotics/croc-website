import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Expand/Collapse Icons

interface Event {
  title: string;
  date: string;
  link: string;
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch events from API (Replace this with actual API call)
    const fetchEvents = async () => {
      try {
        // Placeholder events (replace with API request)
        const data: Event[] = [
          { title: "Hackathon 2024", date: "Sept 2-3", link: "/hackathon" },
          { title: "Robotics Meetup", date: "Oct 15", link: "/events" },
          { title: "Tech Expo", date: "Nov 5", link: "/events" },
        ];
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      {/* 📌 Desktop Version: Collapsible Sidebar */}
      <div className="hidden md:flex fixed right-0 top-1/4 z-[1000] transition-all duration-300">
        {/* Minimized Button (when panel is closed) */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-croc-dark-blue text-white p-3 rounded-l-3xl shadow-md hover:bg-croc-blue transition"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
        )}

        {/* Expanded Panel */}
        {isOpen && (
          <div className="bg-croc-dark-blue text-white rounded-l-3xl shadow-xl p-4 w-64">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">Upcoming Events 📅</h3>
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="text-white">
                <IoIosArrowForward className="text-2xl" />
              </button>
            </div>
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="border-b border-gray-600 pb-2">
                  <a href={event.link} className="hover:text-croc-blue transition">
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-gray-300">{event.date}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 📌 Mobile Version: Floating Button & Slide-Up Panel */}
      <div className="md:hidden fixed bottom-6 right-6 z-[1000]">
        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-croc-dark-blue text-white p-3 rounded-full shadow-md hover:bg-croc-blue transition"
        >
          <FaCalendarAlt className="text-2xl" />
        </button>

        {/* Slide-Up Events Panel */}
        <div
          className={`fixed bottom-0 left-0 w-full bg-croc-dark-blue text-white rounded-t-3xl shadow-xl p-4 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">Upcoming Events 📅</h3>
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="text-white">
            ✕
            </button>
          </div>
          <ul className="space-y-3">
            {events.map((event, index) => (
              <li key={index} className="border-b border-gray-600 pb-2">
                <a href={event.link} className="hover:text-croc-blue transition">
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-300">{event.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}