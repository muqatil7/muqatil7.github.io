import React, { useState, useEffect } from 'react';

const MatrixCell = () => {
  const characters = '01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const [char, setChar] = useState('0');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setChar(characters[Math.floor(Math.random() * characters.length)]);
    }, Math.random() * 1000 * 4); // تسريع الحركة
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-red-700 text-xs" style={{ color: "rgba(255, 0, 0, 0.9)" }}>
      {char}
    </span>
  );
};

// مكون خلفية Matrix
const MatrixBackground = () => {
  const cells = Array.from({ length: 100 });
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-10 gap-2 p-4">
        {cells.map((_, index) => (
          <MatrixCell key={index} />
        ))}
      </div>
    </div>
  );
};


export default MatrixBackground;



/*

const MatrixCell = () => {
  const characters = '01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const [char, setChar] = useState('0');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setChar(characters[Math.floor(Math.random() * characters.length)]);
    }, Math.random() * 1000*4 ); // تسريع الحركة
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-red-500 opacity-25 text-xs animate-pulse">
      {char}
    </span>
  );
};

// مكون خلفية Matrix
const MatrixBackground = () => {
  const cells = Array.from({ length: 100 });
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-10 gap-2 p-4">
        {cells.map((_, index) => (
          <MatrixCell key={index} />
        ))}
      </div>
    </div>
  );
};

*/