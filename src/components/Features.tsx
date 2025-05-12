"use client";

import React from "react";
import { Users, Calendar, Trophy } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Pourquoi Choisir le Club Lyautey à Kénitra ?</h2>
          <p className="text-gray-600 text-lg">
            Découvrez la différence avec nos installations et services premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-brand-accent" />,
              title: "Coaching Expert",
              description: "Apprenez avec des professionnels certifiés passionnés par le développement de vos compétences en padel"
            },
            {
              icon: <Calendar className="h-8 w-8 text-brand-accent" />,
              title: "Réservation Flexible",
              description: "Système de réservation en ligne facile disponible 24/7 pour s'adapter à votre emploi du temps"
            },
            {
              icon: <Trophy className="h-8 w-8 text-brand-accent" />,
              title: "Événements Communautaires",
              description: "Tournois réguliers et rassemblements sociaux pour rencontrer d'autres passionnés de padel à Kénitra"
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-subtle border border-gray-100 hover:shadow-elevation transition-all duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-brand-accent/10 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
