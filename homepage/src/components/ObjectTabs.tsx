'use client';
import * as React from 'react';
import TimeTimeline, { DisplayEvents } from './TimeTimeline';

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
  const [activeTab, setActiveTab] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/debug");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        
        // If data is an array, use it directly; if it's a single object, wrap it in an array
        const newData = Array.isArray(data) ? data : [data];
        
        // Update state with new events
        setEventData(prevData => {
          // Create a new array with unique events
          const uniqueEvents = [...prevData];
          newData.forEach(newEvent => {
            // Only add if event with same timestamp and source doesn't exist
            if (!uniqueEvents.some(event => 
              event.TimeStamp === newEvent.TimeStamp && 
              event.SourceName === newEvent.SourceName
            )) {
              uniqueEvents.push(newEvent);
            }
          });
          // Sort by timestamp (most recent first)
          return uniqueEvents.sort((a, b) => b.TimeStamp - a.TimeStamp);
        });

      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    // Initial fetch
    fetchEvents();

    // Set up polling
    const intervalId = setInterval(fetchEvents, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  // Helper function to get event data value
  const getEventDataValue = (eventData: EventDataItem[], key: string) => {
    const item = eventData.find(data => data.Key === key);
    return item ? item.Value : 'N/A';
  };

  return (
    <div>
      <div className="flex bg-gray-200 p-2 gap-2">
        <div className='mt-5'>
          <TimeTimeline />  
        </div>
        {eventData.map((item, index) => (
          <div>
            <div
              key={index}
              className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black"
            >
              {item.Description}
            </div>
            <div className='flex'>

              <DisplayEvents/>
            </div>
          </div>
        ))}
      </div>

      {/* Event Details Panel */}
      {activeTab !== null && eventData[activeTab] && (
        <div className="mt-2 p-4 bg-white rounded-md shadow">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <strong>Time:</strong> {eventData[activeTab].TimeStamp.toFixed(2)}s
            </div>
            <div>
              <strong>Type:</strong> {eventData[activeTab].EventType}
            </div>
            <div>
              <strong>Source:</strong> {eventData[activeTab].SourceName}
            </div>
            <div>
              <strong>Description:</strong> {eventData[activeTab].Description}
            </div>
            <div className="col-span-2">
              <strong>Event Data:</strong>
              <div className="ml-4">
                {eventData[activeTab].EventData.map((data, i) => (
                  <div key={i}>
                    {data.Key}: {data.Value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}