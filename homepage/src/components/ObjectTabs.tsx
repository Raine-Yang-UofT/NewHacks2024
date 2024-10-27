'use client';
import * as React from 'react';
import TimeTimeline from './TimeTimeline';
import Sidebar from './Sidebar';

// Define the structure for event data key-value pairs
interface EventDataItem {
  Key: string;
  Value: string;
}

// Main interface for the game event data
interface GameEventData {
  TimeStamp: number;
  SourceName: string;
  EventType: string;
  Description: string;
  EventData: EventDataItem[];
}

export default function ObjectTabs() {
  const [eventData, setEventData] = React.useState<GameEventData[]>([]);
  const [activeEvent, setActiveEvent] = React.useState<GameEventData | null>(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/debug");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const newData = Array.isArray(data) ? data : [data];

        // Only add unique events based on TimeStamp and SourceName
        setEventData(prevData => {
          const uniqueEvents = [...prevData];
          newData.forEach(newEvent => {
            if (!uniqueEvents.some(event =>
              event.TimeStamp === newEvent.TimeStamp &&
              event.SourceName === newEvent.SourceName
            )) {
              uniqueEvents.push(newEvent);
            }
          });
          return uniqueEvents.sort((a, b) => b.TimeStamp - a.TimeStamp);
        });

      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
    const intervalId = setInterval(fetchEvents, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleEventClick = (event: GameEventData) => setActiveEvent(event);

  return (
    <div className="flex">
      <div className="flex-grow">
        <TimeTimeline events={eventData} onEventClick={handleEventClick} />
      </div>
      <Sidebar event={activeEvent} />
    </div>
  );
}
