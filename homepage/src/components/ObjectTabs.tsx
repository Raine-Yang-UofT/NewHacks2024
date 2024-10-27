import * as React from 'react';

export default function MyComponent() {
    return (
        <div className="overflow-auto" style={{ width: '2199px', height: '30%' }}>
            <div className="flex bg-gray-200 p-2 gap-2">
                <div className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black">
                    Object 1
                </div>
                <div className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black">
                    Object 2
                </div>
                <div className="bg-gray-300 w-32 h-8 rounded-md flex items-center justify-center text-black">
                    Object
                </div>
            </div>
        </div>
    );
}
