
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';

const timelineData = [
  { time: '10s', content: 'Event 1' },
  { time: '20s', content: 'Event 2' },
  { time: '30s', content: 'Event 3' },
  { time: '30s', content: 'Event 3' }
];

const maxNumEvents = 4;

// export default function TimeTimeline() {
//   return (
//     <div className="">
//       <Timeline>
//         {timelineData.map((entry, index) => (
//           <TimelineItem key={index}>
//             <TimelineOppositeContent color="textSecondary">
//               <Typography className="text-white" variant="body2">{entry.time}</Typography>
//             </TimelineOppositeContent>
            
//             <TimelineSeparator>
//               <TimelineDot />
//               {index < timelineData.length - 1 && <TimelineConnector />}
//             </TimelineSeparator>
            
//             <TimelineContent>
//               <div className="bg-yellow-300 text-black w-32 px-3 py-1 rounded">
//                 {entry.content}
//               </div>
//             </TimelineContent>
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </div>
//   );
// }

export default function TimeTimeline() {
  return (
    <Timeline position="right" sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
        margin: 0
      },
    }}>
      {Array(maxNumEvents).fill(0).map((entry, index) => (
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
    ))}
    </Timeline>
  );
}

export function DisplayEvents(){
  return (
    <div className='flex flex-col gap-[35px]'>
      {timelineData.map((entry, index) => (
        <>
            <div className="bg-yellow-300 text-black px-3 py-1 rounded w-32" key={index}>
              {entry.content}
            </div>
        </>
    ))}      
    </div>
  );
}
