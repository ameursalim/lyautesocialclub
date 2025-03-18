
import { 
  CalendarRange, 
  Users, 
  GraduationCap, 
  Trophy, 
  Dumbbell, 
  ShoppingBag 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <CalendarRange className="h-10 w-10 text-brand-accent" />,
    title: "Location de Terrains",
    description: "Réservez nos terrains de padel premium à l'heure. Parfait pour des parties occasionnelles, des séances d'entraînement régulières ou des matchs compétitifs à Kénitra."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-accent" />,
    title: "Coaching pour Adultes",
    description: "Sessions individuelles ou en groupe avec nos coachs professionnels. Idéal pour les débutants qui souhaitent apprendre ou les joueurs avancés qui perfectionnent leur technique."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-brand-accent" />,
    title: "Programme Enfants",
    description: "Cours de padel spécialisés pour les enfants de 5 à 16 ans. Nous mettons l'accent sur le plaisir, la coordination et les compétences de base dans un environnement sûr et encourageant."
  },
  {
    icon: <Trophy className="h-10 w-10 text-brand-accent" />,
    title: "Tournois",
    description: "Événements compétitifs réguliers pour les joueurs de tous niveaux. Rejoignez nos tournois communautaires à Kénitra et testez vos compétences dans une atmosphère amicale."
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-brand-accent" />,
    title: "Location d'Équipement",
    description: "Raquettes et balles de padel de qualité disponibles à la location. Essayez avant d'acheter ou voyagez léger en sachant que nous vous couvrons."
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-brand-accent" />,
    title: "Pro Shop",
    description: "Équipement et vêtements de padel haut de gamme. Conseils d'experts pour vous aider à trouver l'équipement parfait pour votre jeu au Club Social Lyautey de Kénitra."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Nos Services Premium</h2>
          <p className="text-gray-600 text-lg">
            Au Club Social Lyautey de Kénitra, nous proposons des services complets de padel pour améliorer votre jeu et votre expérience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-subtle overflow-hidden hover:shadow-elevation transition-all duration-300 animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-6 pb-0">
                <div className="rounded-full bg-brand-accent/10 w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-brand-dark">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <Button asChild variant="outline" className="mt-4 w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                  <Link to="/booking">Réserver Maintenant</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
