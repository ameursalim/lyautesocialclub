import React from 'react';

export default function CoachMustaphaImage() {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative border-2 border-brand-accent">
      <img 
        src="/coaches/mustapha.jpg" 
        alt="Coach Mustapha"
        loading="lazy"
        width="128"
        height="128"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}
