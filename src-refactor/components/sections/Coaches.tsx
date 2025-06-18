"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Award, Users } from "lucide-react";
import Link from "next/link";

/**
 * Coaches section component displaying the team of professional coaches
 * Preserves the 'coaches' ID for smooth scroll navigation
 */
const Coaches = () => {
  const coaches = [
    {
      name: "Coach Mehdi",
      image: "/coaches/mehdi.jpg",
      isFederal: false,
      prices: [
        { label: "1 personne", price: "200 DH / 1h" },
        { label: "2 personnes", price: "300 DH / 1h" }
      ]
    },
    {
      name: "Coach Omar",
      image: "/coaches/omar.jpg",
      isFederal: true,
      prices: [
        { label: "1 personne", price: "300 DH / 1h" },
        { label: "2 personnes", price: "400 DH / 1h" }
      ]
    },
    {
      name: "Coach Amine",
      image: "/coaches/amine.jpg",
      isFederal: true,
      prices: [
        { label: "1 personne", price: "300 DH / 1h" },
        { label: "2 personnes", price: "400 DH / 1h" }
      ]
    },
    {
      name: "Coach Mustapha",
      image: "/coaches/mustapha.jpg",
      isFederal: true,
      prices: [
        { label: "1 personne", price: "300 DH / 1h" },
        { label: "2 personnes", price: "400 DH / 1h" }
      ]
    }
  ];

  return (
    <section id="coaches" className="py-20 sm:py-28 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Notre Équipe de Coachs</h2>
          <p className="text-gray-600 text-lg">
            Nos professionnels certifiés sont passionnés par le padel et dédiés à améliorer votre jeu à tous les niveaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-brand-dark text-white py-4 px-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">{coach.name}</h3>
                {coach.isFederal && (
                  <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">
                    Coach fédéral
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand-accent" />
                    Tarifs
                  </h4>
                  <ul className="space-y-2">
                    {coach.prices.map((price, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <span>{price.label}</span>
                        <span className="font-semibold">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent w-full">
                    <a href="tel:+212661076802" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
            <Link href="/trainers">
              Voir Tous Les Détails
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
