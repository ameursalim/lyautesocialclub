"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * Pricing section component displaying tariffs and booking options
 * Preserves the 'pricing' ID for smooth scroll navigation
 */
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Nos Tarifs</h2>
          <p className="text-gray-600 text-lg">
            Des tarifs compétitifs pour votre passion du padel au Club Social Lyautey de Kénitra
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Standard Pricing */}
          <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden hover:shadow-elevation transition-all duration-300">
            <div className="bg-brand-dark text-white py-6 px-6">
              <h3 className="text-2xl font-bold">Réservation de Terrain</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-accent/10 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Tarifs Horaires</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Heures Pleines</span>
                        <span className="font-semibold">300 DH / 1h30</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Heures Creuses</span>
                        <span className="font-semibold">240 DH / 1h30</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      * Les créneaux sont de 1h30 pour une expérience de jeu optimale
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-accent/10 rounded-full mt-1">
                    <Tag className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Équipement</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Location de Raquette</span>
                        <span className="font-semibold">20 DH</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Balles</span>
                        <span className="font-semibold">Gratuites</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="w-full bg-brand-dark text-white hover:bg-brand-accent">
                  <Link href="/booking">
                    Réserver Maintenant <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Membership & Packages */}
          <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden hover:shadow-elevation transition-all duration-300">
            <div className="bg-brand-dark text-white py-6 px-6">
              <h3 className="text-2xl font-bold">Abonnements & Forfaits</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-accent/10 rounded-full mt-1">
                    <CreditCard className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Carnet de Tickets</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">20 Tickets</span>
                        <span className="font-semibold">1200 DH</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Prix par ticket</span>
                        <span className="font-semibold">60 DH</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-accent/10 rounded-full mt-1">
                    <Tag className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Padel School Kids</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Séance</span>
                        <span className="font-semibold">100 DH</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Forfait mensuel</span>
                        <span className="font-semibold">400 DH</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Forfait trimestriel</span>
                        <span className="font-semibold">1200 DH</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                  <Link href="/tarifs">
                    Voir Tous les Tarifs <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
