'use client';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Event {
  date: Date;
  title: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  // Function to render custom content in each tile of the calendar
  const renderTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return <p className="bg-blue-500 text-white p-1 rounded">{event.title}</p>;
      }
    }
    return null;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Calendar
        tileContent={renderTileContent}
      />
    </div>
  );
};

export default EventCalendar;