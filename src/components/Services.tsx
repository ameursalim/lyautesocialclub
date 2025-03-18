
import { 
  CalendarRange, 
  Users, 
  GraduationCap, 
  Trophy, 
  Tennis, 
  ShoppingBag 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <CalendarRange className="h-10 w-10 text-brand-accent" />,
    title: "Court Rentals",
    description: "Book our premium padel courts by the hour. Perfect for casual games, regular training sessions, or competitive matches."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-accent" />,
    title: "Adult Coaching",
    description: "Individual or group sessions with our professional coaches. Perfect for beginners looking to learn or advanced players refining their technique."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-brand-accent" />,
    title: "Kids Program",
    description: "Specialized padel classes for children aged 5-16. We focus on fun, coordination, and basic skills in a safe, supportive environment."
  },
  {
    icon: <Trophy className="h-10 w-10 text-brand-accent" />,
    title: "Tournaments",
    description: "Regular competitive events for players of all levels. Join our community tournaments and test your skills in a friendly atmosphere."
  },
  {
    icon: <Tennis className="h-10 w-10 text-brand-accent" />,
    title: "Equipment Rental",
    description: "Quality padel racquets and balls available for rent. Try before you buy or travel light knowing we've got you covered."
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-brand-accent" />,
    title: "Pro Shop",
    description: "Top-of-the-line padel equipment and apparel. Expert advice to help you find the perfect gear for your game."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animate">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Our Premium Services</h2>
          <p className="text-gray-600 text-lg">
            At Lyautey Social Club, we offer comprehensive padel services to enhance your game and experience.
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
                  <Link to="/booking">Book Now</Link>
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
