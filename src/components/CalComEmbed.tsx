'use client';

import { useEffect } from 'react';

export default function CalComEmbed() {
  useEffect(() => {
    // Fonction pour initialiser Cal.com
    const initCal = () => {
      try {
        // @ts-ignore - Cal est ajouté globalement par le script
        if (window.Cal) {
          // @ts-ignore
          window.Cal("init", "terrain1", {origin:"https://cal.com"});
          
          // @ts-ignore
          window.Cal.ns.terrain1("inline", {
            elementOrSelector:"#my-cal-inline",
            config: {"layout":"month_view"},
            calLink: "salim-ameur-rigyvp/terrain1",
          });
          
          // @ts-ignore
          window.Cal.ns.terrain1("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        } else {
          // Si Cal n'est pas encore défini, réessayer dans 100ms
          setTimeout(initCal, 100);
        }
      } catch (error) {
        console.error('Error initializing Cal:', error);
      }
    };

    // Injecte le script Cal.com
    const script = document.createElement('script');
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // Initialiser Cal après le chargement du script
      initCal();
    };
    document.head.appendChild(script);

    // Nettoyer au démontage
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="my-cal-inline" 
      style={{ 
        width: '100%', 
        height: '650px', 
        overflow: 'auto',
        border: 'none',
        borderRadius: '8px',
      }} 
    />
  );
}
