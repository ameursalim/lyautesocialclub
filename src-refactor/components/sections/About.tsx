"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * About section component for Lyautey Social Club website
 * Displays information about the club facilities and coaches
 * The 'id' attribute is preserved for smooth scroll navigation
 */
export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 stagger-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">Le Meilleur du Padel à Kénitra</h2>
            <p className="text-gray-600 mb-6">
              Bienvenue au nouveau centre de padel de Kénitra ! Notre complexe moderne met à votre disposition deux terrains de padel de qualité supérieure, offrant une expérience de jeu exceptionnelle pour tous les passionnés de ce sport dynamique.
            </p>
            <p className="text-gray-600 mb-6">
              Notre équipe de trois coachs professionnels est là pour vous accompagner dans votre progression, que vous soyez débutant ou joueur confirmé. Nous nous engageons à créer une communauté padel vibrante et accueillante à Kénitra.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">2</p>
                <p className="text-gray-600 text-sm">Terrains Premium</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">3</p>
                <p className="text-gray-600 text-sm">Coachs Professionnels</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">7j/7</p>
                <p className="text-gray-600 text-sm">Disponibilité</p>
              </div>
            </div>
            
            <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent btn-hover-fx">
              <Link href="/booking">
                Réservez Votre Session <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-elevation">
                <img 
                  src="/lovable-uploads/21205f13-c615-4b89-a962-f71c5963dfcf.png" 
                  alt="Terrain de Padel" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-glass animate-slide-up">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-brand-accent/10 rounded-full">
                    <Calendar className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ouvert Tous les Jours</p>
                    <p className="font-medium">8h00 - 22h00</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 shadow-glass animate-slide-down">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-brand-accent/10 rounded-full">
                    <Trophy className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mensuel</p>
                    <p className="font-medium">Tournois & Événements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
