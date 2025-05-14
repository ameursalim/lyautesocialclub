import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import BookingCalendar from "@/components/BookingCalendar";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
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
              Retour à l'Accueil
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark">Réserver un Terrain</h1>
                <p className="text-gray-600 mt-2">
                  Sélectionnez une date et une heure pour réserver votre terrain de padel
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-brand-accent"></span>
                <span className="text-gray-600 text-sm">Créneaux Disponibles</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Calendar with Cal.com */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-gray-50 rounded-3xl p-6 md:p-10 mb-12">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4 text-center">Réservez votre terrain</h2>
            <p className="text-center text-gray-600 mb-6">Pour réserver, utilisez notre système Cal.com intégré ci-dessous.</p>
            
            {/* Version simplifiée de l'intégration Cal.com */}
            <div className="cal-embed-wrapper" style={{ maxWidth: '1040px', margin: '0 auto', height: '750px' }}>
              <iframe 
                src="https://cal.com/salim-ameur-rigyvp/terrain1?embed=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  border: 'none', 
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Informations sur les Terrains</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Séances de 60 minutes</li>
                <li>• 6 terrains premium avec parois en verre</li>
                <li>• Installation intérieure à climat contrôlé</li>
                <li>• Gazon artificiel de qualité professionnelle</li>
                <li>• Éclairage pour jeu en soirée</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Politique de Réservation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Réservations jusqu'à 7 jours à l'avance</li>
                <li>• Annulations acceptées jusqu'à 24 heures avant</li>
                <li>• Vestiaires et douches disponibles</li>
                <li>• Location d'équipement sur place</li>
                <li>• Arrivez 15 minutes avant votre séance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Services d'Entrainement</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Leçons privées (1-2 joueurs)</li>
                <li>• Sessions de groupe (3-4 joueurs)</li>
                <li>• Programmes pour enfants (5-16 ans)</li>
                <li>• Niveaux débutant à avancé</li>
                <li>• Ajoutez un coach lors de la réservation</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-10 text-center">Questions Fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Combien de temps à l'avance puis-je réserver un terrain?",
                answer: "Vous pouvez réserver des terrains jusqu'à 7 jours à l'avance. Pour les réservations hebdomadaires régulières, nous proposons des forfaits d'adhésion qui permettent des réservations jusqu'à 14 jours à l'avance."
              },
              {
                question: "Quelle est votre politique d'annulation?",
                answer: "Les annulations effectuées au moins 24 heures avant l'heure réservée sont entièrement remboursables. Les annulations avec moins de 24 heures de préavis ne sont pas remboursables."
              },
              {
                question: "Fournissez-vous l'équipement de padel?",
                answer: "Oui, nous proposons des raquettes et des balles de padel premium à la location. La location d'équipement n'est pas incluse dans la réservation du terrain et peut être ajoutée lors du processus de paiement."
              },
              {
                question: "Puis-je réserver un entraineur avec ma réservation de terrain?",
                answer: "Absolument! Vous pouvez ajouter des services d'entrainement lors du processus de réservation. Nous proposons des cours particuliers et en groupe pour tous les niveaux."
              },
              {
                question: "Y a-t-il des vestiaires disponibles?",
                answer: "Oui, nous mettons à disposition des vestiaires modernes avec douches, toilettes et espaces de change pour tous les joueurs."
              },
              {
                question: "Quelle est la durée de chaque séance?",
                answer: "Les réservations standard de terrain sont pour des séances de 60 minutes. Si vous avez besoin de plus de temps, vous pouvez réserver des créneaux consécutifs."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
