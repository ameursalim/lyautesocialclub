
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const Gallery = () => {
  const [fullImage, setFullImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Notre Galerie</h2>
          <p className="text-gray-600 text-lg">
            Découvrez nos installations de padel premium à Kénitra à travers ces images
          </p>
        </div>

        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-xl cursor-pointer shadow-subtle hover:shadow-elevation transition-all duration-300"
                      onClick={() => setFullImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white" />
            <CarouselNext className="right-2 bg-white" />
          </Carousel>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer shadow-subtle hover:shadow-elevation transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setFullImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

        {fullImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setFullImage(null)}
          >
            <div className="max-w-6xl max-h-screen animate-scale-in">
              <img 
                src={fullImage} 
                alt="Vue agrandie" 
                className="max-h-[90vh] w-auto object-contain" 
              />
              <button 
                onClick={() => setFullImage(null)} 
                className="absolute top-4 right-4 text-white bg-brand-dark/70 rounded-full p-2 hover:bg-brand-dark transition-colors"
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
