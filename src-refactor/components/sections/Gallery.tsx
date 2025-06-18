"use client";

import React from 'react';

/**
 * Gallery component that displays Instagram-style images
 * Preserves the 'gallery' ID for smooth scroll navigation
 * Implements the custom Instagram integration as mentioned in requirements
 */
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/465f9e3f-c26c-4b40-bd57-81ef3942c691.png",
      alt: "Joueur de padel en action",
    },
    {
      src: "/lovable-uploads/21205f13-c615-4b89-a962-f71c5963dfcf.png",
      alt: "Partie de padel",
    },
    {
      src: "/lovable-uploads/cba2ae18-a6f5-4c5f-8d24-9ff1c2f3827b.png",
      alt: "Détail filet de padel",
    },
    {
      src: "/lovable-uploads/b5d68c7b-6da2-405d-8002-957aec365fd6.png",
      alt: "Joueurs de padel",
    },
    {
      src: "/lovable-uploads/99c93bb6-e9b0-47d6-99db-1a309ac04aff.png",
      alt: "Terrain de padel de nuit",
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Notre Galerie Instagram</h2>
          <p className="text-gray-600 text-lg">
            Suivez-nous sur <a href="https://www.instagram.com/lyauteysocialclub/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">@lyauteysocialclub</a> pour découvrir notre club et nos activités
          </p>
        </div>
        
        {/* Grille d'images style Instagram */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-subtle hover:shadow-elevation transition-all duration-300 bg-white">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full aspect-square object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.instagram.com/lyauteysocialclub/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-6 py-3 rounded-full hover:bg-brand-accent transition-colors font-medium inline-flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              className="w-5 h-5 mr-2"
              fill="currentColor"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
            Suivez-nous sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
