"use client";

import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Ce Que Disent Nos Membres</h2>
          <p className="text-gray-600 text-lg">
            Écoutez les joueurs qui ont transformé leur jeu au Club Social Lyautey de Kénitra
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Le programme de coaching à Lyautey a complètement transformé mon jeu. En seulement trois mois, je suis passé de débutant complet à jouer des matchs en toute confiance.",
              name: "Sarah Johnson",
              role: "Membre depuis 2023"
            },
            {
              quote: "Les installations sont de premier ordre et le système de réservation est incroyablement facile à utiliser. J'adore pouvoir réserver un terrain à tout moment grâce au système en ligne.",
              name: "Michael Chen",
              role: "Membre depuis 2023"
            },
            {
              quote: "Mes enfants adorent absolument le programme pour enfants. Les coachs sont incroyables avec eux et ils se sont tellement améliorés tout en s'amusant.",
              name: "Sophia Rodriguez",
              role: "Parent de joueurs juniors"
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <svg className="h-8 w-8 text-brand-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
