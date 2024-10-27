import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

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

interface TimeTimelineProps {
  events: GameEventData[];
  onEventClick: (event: GameEventData) => void;
}

const TimeTimeline: React.FC<TimeTimelineProps> = ({ events, onEventClick }) => {
  // Group events by source
  const eventsBySource = events.reduce((acc, event) => {
    if (!acc[event.SourceName]) acc[event.SourceName] = [];
    acc[event.SourceName].push(event);
    return acc;
  }, {} as { [key: string]: GameEventData[] });

  return (
    <div className="grid grid-cols-5 gap-4">
      {Object.entries(eventsBySource).map(([source, sourceEvents]) => (
        <div key={source}>
          <Typography variant="h6" color="primary">
            {source}
          </Typography>
          <Timeline>
            {sourceEvents.map((event, index) => (
              <TimelineItem key={index} onClick={() => onEventClick(event)}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < sourceEvents.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="body2" color="textSecondary">
                    {event.TimeStamp}
                    </Typography>
                  <div className="bg-yellow-300 text-black w-32 px-3 py-1 rounded mt-1">
                    {event.Description}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      ))}
    </div>
  );
};

export default TimeTimeline;
