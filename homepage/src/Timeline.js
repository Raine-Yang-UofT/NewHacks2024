import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

export default function TimeTimeline() {
    return (
        <div>
            <div
                className="header"
                style={{
                    display: 'flex',
                    backgroundColor: '#e0e0e0',
                    padding: '10px',
                    gap: '10px'
                }}
            >
                <div
                    className="tab"
                    style={{
                        backgroundColor: '#ccc',
                        width: '80px',
                        height: '30px',
                        borderRadius: '5px'
                    }}
                ></div>
                <div
                    className="tab"
                    style={{
                        backgroundColor: '#ccc',
                        width: '80px',
                        height: '30px',
                        borderRadius: '5px'
                    }}
                ></div>
                <div
                    className="tab"
                    style={{
                        backgroundColor: '#ccc',
                        width: '80px',
                        height: '30px',
                        borderRadius: '5px'
                    }}
                ></div>
            </div>
            <div>
                <Timeline position="left">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{
                                m: 'auto 0',
                                align: 'right',
                                variant: 'body2',
                                color: 'text.secondary',
                                backgroundColor: 'yellow',
                                padding: '8px',        // Add padding to give it a boxed look
                                borderRadius: '4px'    // Optional: rounds the corners of the box
                            }}
                        >
                            Person
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>1s</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2s</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>3s</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>4s</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}

