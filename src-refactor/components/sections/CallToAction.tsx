"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * CallToAction component with booking buttons and service exploration
 * Shown at the bottom of the homepage to encourage conversions
 */
export const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 bg-brand-dark">
      <div className="section-container">
        <div className="bg-gradient-to-r from-brand-accent to-brand-accent/80 rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left stagger-animate">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Prêt à Jouer ?</h2>
              <p className="text-white/80 text-lg max-w-xl">
                Réservez votre terrain maintenant et découvrez pourquoi le Club Social Lyautey offre l'expérience de padel premium à Kénitra.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-white text-brand-accent hover:bg-white/90 btn-hover-fx">
                <Link href="/booking">
                  Réserver un Terrain <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-accent btn-hover-fx">
                <a href="#services">
                  Explorer les Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
