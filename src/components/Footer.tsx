
"use client";

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/lovable-uploads/bdf64f8c-a968-4456-971c-199ccbac3b36.png" 
                alt="Lyautey Social Club" 
                className="h-8 invert" 
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Lyautey Social Club offre des installations de padel de qualité et des cours pour les joueurs de tous niveaux. Rejoignez notre communauté dynamique de passionnés de padel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Réserver
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Location de Terrains
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-white transition-colors">
                  Cours pour Adultes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-white transition-colors">
                  Programmes Enfants
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Tournois
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactez-Nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Avenue du Padel, Lyautey, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-accent mr-2 flex-shrink-0" />
                <span className="text-gray-400">+212 661-076802</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-accent mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@lyauteyclub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Lyautey Social Club. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
