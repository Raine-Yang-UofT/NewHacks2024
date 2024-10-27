"use client";
import React, { useState, useEffect } from "react";

const Sidebar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]); // State to hold events data
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/debug"); // Update with your actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs once when the component mounts

  const toggleContainer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Event Sidebar</h2>
      {events.map((event, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleContainer(index)}
            className="cursor-pointer p-2 bg-gray-700 rounded-md"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Timestamp: {event.TimeStamp}</p>
              <span className="text-xs">{event.EventType}</span>
            </div>
            <p className="text-xs">{event.Description}</p>
          </div>
          {activeIndex === index && (
            <div className="mt-2 p-2 bg-gray-900 rounded-md">
              <p className="text-sm font-semibold">Source: {event.Source.name}</p>
              <p className="text-xs">Previous Health: {event.EventData.PreviousHealth}</p>
              <p className="text-xs">Current Health: {event.EventData.CurrentHealth}</p>
              <p className="text-xs">Damage Taken: {event.EventData.DamageTaken}</p>
              <p className="text-xs">
                Critical Hit: {event.EventData.IsCriticalHit ? "Yes" : "No"}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
