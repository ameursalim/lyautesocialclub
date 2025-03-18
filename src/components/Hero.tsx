
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen-90 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 stagger-animate">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-medium text-sm">
              <span className="animate-pulse mr-2">●</span> Expérience Padel Premium
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
              Élevez Votre <br />
              <span className="text-brand-accent">Jeu de Padel</span> <br />
              au Club Lyautey
            </h1>
            
            <p className="text-lg text-gray-700 max-w-lg text-pretty">
              Découvrez l'alliance parfaite entre sport et connexion sociale au Club Social Lyautey.
              Des terrains de padel de classe mondiale, un coaching expert et une communauté dynamique vous attendent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-dark text-white hover:bg-brand-accent btn-hover-fx">
                <Link to="/booking">
                  Réserver un Terrain <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white btn-hover-fx">
                <a href="#services">
                  Explorer nos Services
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-3xl blur-xl opacity-70 animate-pulse-slow"></div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-elevation relative z-10">
                <img 
                  src="/lovable-uploads/ca7f6cc4-ac5e-4faa-bef9-c31cfd48c8c1.png" 
                  alt="Joueur de Padel" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-glass animate-slide-up">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 text-sm">Terrains</p>
                    <p className="text-3xl font-bold text-brand-dark">6</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Coachs</p>
                    <p className="text-3xl font-bold text-brand-dark">8</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Membres</p>
                    <p className="text-3xl font-bold text-brand-dark">500+</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Années</p>
                    <p className="text-3xl font-bold text-brand-dark">10</p>
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

export default Hero;
