
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 stagger-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">Le Meilleur du Padel à Kénitra</h2>
            <p className="text-gray-600 mb-6">
              Le Club Social Lyautey est bien plus que de simples terrains de padel — c'est une communauté de joueurs passionnés et un centre de connexion sociale à Kénitra. Nos installations de pointe sont conçues pour offrir l'environnement parfait aux joueurs de tous niveaux.
            </p>
            <p className="text-gray-600 mb-6">
              Fondé en 2013, nous sommes devenus la destination privilégiée des amateurs de padel dans la région de Kénitra. Notre équipe de coachs expérimentés est dédiée à vous aider à améliorer vos compétences, que vous soyez débutant ou joueur chevronné.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">10+</p>
                <p className="text-gray-600 text-sm">Années d'Expérience</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">6</p>
                <p className="text-gray-600 text-sm">Terrains Premium</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-brand-accent">8</p>
                <p className="text-gray-600 text-sm">Coachs Professionnels</p>
              </div>
            </div>
            
            <Button asChild className="bg-brand-dark text-white hover:bg-brand-accent btn-hover-fx">
              <Link to="/booking">
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
              
              {/* Floating elements */}
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

const Features = () => {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
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

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
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
              role: "Membre depuis 2021"
            },
            {
              quote: "Les installations sont de premier ordre et le système de réservation est incroyablement facile à utiliser. J'adore pouvoir réserver un terrain à tout moment grâce au système en ligne.",
              name: "Michael Chen",
              role: "Membre depuis 2019"
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

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-dark">
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
                <Link to="/booking">
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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
