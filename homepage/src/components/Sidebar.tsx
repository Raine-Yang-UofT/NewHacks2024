"use client";
import React from "react";

interface EventDataItem {
  Key: string;
  Value: string;
}

interface GameEventData {
  TimeStamp: number;
  SourceName: string;
  EventType: string;
  Description: string;
  EventData: EventDataItem[];
}

interface SidebarProps {
  event: GameEventData | null;
}

const Sidebar: React.FC<SidebarProps> = ({ event }) => {
  if (!event) return <div className="bg-gray-800 text-white h-full p-4">Select an event to view details</div>;

  return (
    <div className="bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-semibold mb-4">Event Details</h2>
      <div>
        <p><strong>Timestamp:</strong> {event.TimeStamp}</p>
        <p><strong>Type:</strong> {event.EventType}</p>
        <p><strong>Description:</strong> {event.Description}</p>
        <p><strong>Source:</strong> {event.SourceName}</p>
        <div className="mt-2">
          <strong>Event Data:</strong>
          <ul>
            {event.EventData.map((data, index) => (
              <li key={index}>{data.Key}: {data.Value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
