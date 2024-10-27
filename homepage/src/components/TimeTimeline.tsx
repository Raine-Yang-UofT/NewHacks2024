// TimeTimeline.tsx
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
}

const TimeTimeline: React.FC<TimeTimelineProps> = ({ events }) => {
  return (
    <Timeline>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2" color="textSecondary">
              {new Date(event.TimeStamp * 1000).toLocaleTimeString()} {/* Convert timestamp */}
            </Typography>
            <div className="bg-yellow-300 text-black w-32 px-3 py-1 rounded mt-1">
              {event.Description}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeTimeline;
