import React from 'react';

export default function CoachAmineImage() {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative border-2 border-brand-accent">
      <img 
        src="/coaches/amine.jpg" 
        alt="Coach Amine"
        loading="lazy"
        width="128"
        height="128"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}
