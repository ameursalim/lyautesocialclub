import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Clock, CreditCard, Tag, Users, Calendar, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-brand-dark py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Retour à l&apos;accueil
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tarifs et Réservations</h1>
              <p className="text-xl text-white/80">
                Découvrez nos tarifs compétitifs pour profiter pleinement de vos sessions de padel au Lyautey Social Club.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Tarifs des Terrains de Padel</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Réservez votre créneau de jeu et profitez de nos installations de qualité.
                  Nos tarifs s&apos;adaptent aux horaires pour vous offrir la meilleure expérience possible.
                </p>
              </div>

              {/* Main Pricing Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-12">
                <div className="bg-brand-dark text-white py-6 px-6">
                  <h3 className="text-2xl font-bold">Réservation de Terrain</h3>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Peak Hours */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Clock className="h-6 w-6 text-brand-accent mr-3" />
                        <h4 className="text-xl font-semibold">Heures Pleines</h4>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-brand-dark">300 DH</span>
                        <span className="text-gray-600 ml-2">/ 1h30 de jeu</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Lundi au Vendredi: 17h - 22h<br />
                        Weekends et jours fériés: Toute la journée
                      </p>
                      <div className="mt-6">
                        <Button asChild className="w-full bg-brand-dark text-white hover:bg-brand-accent">
                          <Link href="/booking">Réserver maintenant</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Off-peak Hours */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Clock className="h-6 w-6 text-brand-accent mr-3" />
                        <h4 className="text-xl font-semibold">Heures Creuses</h4>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-brand-dark">240 DH</span>
                        <span className="text-gray-600 ml-2">/ 1h30 de jeu</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Lundi au Vendredi: 9h - 17h<br />
                        Profitez de nos tarifs réduits pendant les heures creuses
                      </p>
                      <div className="mt-6">
                        <Button asChild className="w-full bg-brand-dark text-white hover:bg-brand-accent">
                          <Link href="/booking">Réserver maintenant</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-brand-accent/10 p-3 rounded-lg mr-4">
                        <Tag className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-brand-dark mb-2">Location de Raquettes</h4>
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-brand-dark">20 DH</span>
                          <span className="text-gray-600 ml-2">/ raquette</span>
                        </div>
                        <p className="text-gray-600">
                          Raquettes de qualité professionnelle disponibles à la location pour les joueurs de tous niveaux.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-brand-accent/10 p-3 rounded-lg mr-4">
                        <AlertCircle className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-brand-dark mb-2">Balles de Padel</h4>
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-green-600">Gratuites</span>
                        </div>
                        <p className="text-gray-600">
                          Les balles sont fournies gratuitement avec la réservation du terrain pour vous garantir une expérience de jeu optimale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Books */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Carnet de Tickets</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Pour nos joueurs réguliers, nous proposons des carnets de tickets avantageux.
                  Économisez sur vos sessions et profitez d&apos;une flexibilité maximale.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-brand-accent">
                <div className="bg-brand-accent text-white py-6 px-6">
                  <h3 className="text-2xl font-bold">Carnet de 20 Tickets</h3>
                </div>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 mb-8">
                    <div>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-brand-dark">1200 DH</span>
                        <span className="text-gray-600 ml-2">pour 20 tickets</span>
                      </div>
                      <p className="text-gray-600">
                        <span className="font-medium">Prix par ticket:</span> 60 DH (au lieu de 75 DH)
                      </p>
                    </div>
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg font-medium">
                      Économisez 20% sur le prix standard
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-semibold text-brand-dark mb-4">Avantages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>20 tickets de 90 minutes chacun</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Valable pour les heures pleines ou creuses</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Pas de date d&apos;expiration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Tickets partageables entre amis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-brand-dark text-white hover:bg-brand-accent px-8 py-3 text-lg">
                      Acheter un carnet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Padel School Kids Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-brand-accent">
                <div className="bg-brand-accent text-white py-6 px-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8"/>
                      <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z"/>
                      <path d="M12 16v3"/>
                      <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
                    </svg>
                    Padel School Kids
                  </h3>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg mb-6">
                      Initiez vos enfants au padel dans un environnement amusant et sécurisé ! Notre école de padel dédiée aux enfants est encadrée par des professionnels pour développer leurs compétences sportives tout en s'amusant.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-brand-dark mb-4">Informations</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-brand-accent mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium block">Horaires</span>
                            <span>Tous les dimanches de 11h00 à 13h00</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-accent mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium block">Âge</span>
                            <span>Enfants de 5 à 10 ans</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-accent mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                              <line x1="16" y1="2" x2="16" y2="6"/>
                              <line x1="8" y1="2" x2="8" y2="6"/>
                              <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium block">Durée</span>
                            <span>Sessions de 60 minutes</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-accent mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/>
                              <line x1="18" y1="9" x2="12" y2="15"/>
                              <line x1="12" y1="9" x2="18" y2="15"/>
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium block">Encadrement</span>
                            <span>Par nos coachs fédéraux diplômés</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-brand-dark mb-4">Tarifs</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="font-medium">1 séance</span>
                          <span className="text-lg font-bold text-brand-dark">100 DH</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="font-medium">Abonnement mensuel</span>
                          <div className="text-right">
                            <span className="text-lg font-bold text-brand-dark">400 DH</span>
                            <span className="block text-green-600 text-sm">Économisez 20%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Abonnement trimestriel</span>
                          <div className="text-right">
                            <span className="text-lg font-bold text-brand-dark">1200 DH</span>
                            <span className="block text-green-600 text-sm">Économisez 25%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-brand-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          <span className="font-medium">Ce qui est inclus</span>
                        </div>
                        <p className="mt-2 text-gray-600">
                          Prêt de raquette et balles, encadrement professionnel, et une collation pour chaque enfant.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-brand-dark text-white hover:bg-brand-accent px-8 py-3 text-lg">
                      Inscrire votre enfant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Questions Fréquentes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tout ce que vous devez savoir sur nos tarifs et notre politique de réservation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Comment puis-je réserver un terrain?</h3>
                  <p className="text-gray-600">
                    Vous pouvez réserver un terrain directement en ligne sur notre site web, par téléphone au +212 661-076802, ou en personne à notre accueil. Les réservations en ligne sont disponibles 24h/24.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Qu&apos;est-ce qui est inclus dans le prix de location du terrain?</h3>
                  <p className="text-gray-600">
                    Le prix comprend l&apos;accès au terrain pour la durée réservée (1h30), les balles de padel, l&apos;éclairage du terrain si nécessaire, et l&apos;accès aux vestiaires et douches.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Quelle est votre politique d&apos;annulation?</h3>
                  <p className="text-gray-600">
                    Les annulations effectuées au moins 24 heures avant l&apos;heure de réservation sont entièrement remboursables. Les annulations tardives ou les absences ne donnent pas droit à un remboursement.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Proposez-vous des cours pour débutants?</h3>
                  <p className="text-gray-600">
                    Oui, nous proposons des cours individuels et en groupe pour tous les niveaux. Consultez notre page Coaching pour découvrir nos coachs certifiés et leurs tarifs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Y a-t-il des réductions pour les membres?</h3>
                  <p className="text-gray-600">
                    Oui, nous proposons plusieurs formules d&apos;abonnement qui offrent des tarifs avantageux pour les joueurs réguliers, ainsi que des avantages supplémentaires comme la priorité de réservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à réserver votre prochain match?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Réservez dès maintenant et vivez une expérience de padel exceptionnelle au Lyautey Social Club.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-brand-accent hover:text-white">
                  <Link href="/booking">Réserver un terrain</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/trainers">Voir nos coachs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
