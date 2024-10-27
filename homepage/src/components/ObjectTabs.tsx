import * as React from 'react';
import TimeTimeline, { DisplayEvents } from './TimeTimeline';

const objectData = [
  { name: 'Object 1' },
  { name: 'Object 2' },
  { name: 'Object 3' },
  { name: 'Object 4' },
];

export default function ObjectTabs() {
  return (
    <div>
      <div className="flex bg-gray-200 p-2 gap-2">
        <div className='mt-5'>
          <TimeTimeline />  
        </div>
        {objectData.map((item, index) => (
          <div>
            <div
              key={index}
              className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black"
            >
              {item.name}
            </div>
            <div className='flex'>

              <DisplayEvents/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

