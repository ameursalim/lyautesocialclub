import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Phone, Award, Users } from "lucide-react";
import CoachOmarImage from "@/components/CoachOmarImage";
import CoachAmineImage from "@/components/CoachAmineImage";
import CoachMehdiImage from "@/components/CoachMehdiImage";
import CoachMustaphaImage from "@/components/CoachMustaphaImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TrainersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Booking Header */}
        <section className="bg-gray-50 py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-brand-accent transition-colors mb-6"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark">Coaching</h1>
                <p className="text-gray-600 mt-2">
                  Réservez une séance avec l'un de nos entraineurs professionnels
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-brand-accent"></span>
                <span className="text-gray-600 text-sm">Créneaux Disponibles</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Coaching Information */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-3xl p-6 md:p-10 mb-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Nos Services de Coaching</h2>
              <p className="text-gray-600">
                Notre équipe d'entraîneurs professionnels est dédiée à vous aider à améliorer votre jeu, 
                que vous soyez débutant ou joueur expérimenté. Nous proposons des cours individuels ou en groupe.
              </p>
              <div className="mt-6 text-brand-accent font-medium">
                PS : les prix du terrain et du matériel sont inclus dans le tarif
              </div>
            </div>
          </div>
        </section>
        
        {/* Coaches Grid */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Coach Mehdi */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark text-white py-4 px-6">
                <h3 className="text-xl font-bold">Coach Mehdi</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <CoachMehdiImage />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand-accent" />
                    Tarifs
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>1 personne</span>
                      <span className="font-semibold">200 DH / 1h</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>2 personnes</span>
                      <span className="font-semibold">300 DH / 1h</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent">
                    <a href="tel:+212661076802" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Coach Omar */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark text-white py-4 px-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Coach Omar</h3>
                <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">
                  Coach fédéral
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <CoachOmarImage />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand-accent" />
                    Tarifs
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>1 personne</span>
                      <span className="font-semibold">300 DH / 1h</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>2 personnes</span>
                      <span className="font-semibold">400 DH / 1h</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent">
                    <a href="tel:+212661076802" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Coach Amine */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark text-white py-4 px-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Coach Amine</h3>
                <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">
                  Coach fédéral
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <CoachAmineImage />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand-accent" />
                    Tarifs
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>1 personne</span>
                      <span className="font-semibold">300 DH / 1h</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>2 personnes</span>
                      <span className="font-semibold">400 DH / 1h</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent">
                    <a href="tel:+212661076802" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Coach Mustapha */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-dark text-white py-4 px-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Coach Mustapha</h3>
                <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">
                  Coach fédéral
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <CoachMustaphaImage />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand-accent" />
                    Tarifs
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>1 personne</span>
                      <span className="font-semibold">300 DH / 1h</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>2 personnes</span>
                      <span className="font-semibold">400 DH / 1h</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent">
                    <a href="tel:+212661076802" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
