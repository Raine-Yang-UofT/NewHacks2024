import React, { createContext, useState, useEffect } from 'react';

export const EventsContext = createContext();

export function EventsProvider({ children }) {
    const [events, setEvents] = useState([]);

    const fetchEvents = () => {
        fetch('/events.json') // Assumes events.json is in the public folder
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <EventsContext.Provider value={events}>
            {children}
        </EventsContext.Provider>
    );
}