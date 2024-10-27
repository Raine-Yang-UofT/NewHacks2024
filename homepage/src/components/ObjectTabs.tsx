import * as React from 'react';

const objectData = [
  { name: 'Object 1' },
  { name: 'Object 2' },
  { name: 'Object 3' },
  { name: 'Object 4' },
];

export default function ObjectTabs() {
  return (
    <div className="overflow-auto" style={{ width: '2199px', height: '30%' }}>
      <div className="flex bg-gray-200 p-2 gap-2">
        {objectData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

