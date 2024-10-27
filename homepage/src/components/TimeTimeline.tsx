import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

const timelineData = [
  { time: '10s', content: 'Event 1' },
  { time: '20s', content: 'Event 2' },
  { time: '30s', content: 'Event 3' }
];

export default function TimeTimeline() {
  return (
    <div className="justify-contents-left">
      <Timeline>
        {timelineData.map((entry, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="textSecondary">
              <Typography className="text-white" variant="body2">{entry.time}</Typography>
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <TimelineDot />
              {index < timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            
            <TimelineContent>
              <div className="bg-yellow-300 text-black w-32 px-3 py-1 rounded">
                {entry.content}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
