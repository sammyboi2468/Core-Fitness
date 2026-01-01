"use client";
import React, { useEffect, useState } from 'react';

function Loadingscreen({ onComplete }) {
  const [text, setText] = useState('');
  const fulltext = 'Loading Core Fitness...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fulltext.substring(0, index)); 
      index++;
      if (index > fulltext.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed z-50 inset-0 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold bg-green-500 bg-clip-text text-transparent">
        Core <span className='bg-white bg-clip-text text-transparent'> Fitness</span><span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default Loadingscreen;
