# Lyautey Social Club - Site Web Refactorisé

Ce projet est une refactorisation du site web du Club Social Lyautey de Kénitra, offrant une structure de code plus organisée et maintenable.

## Structure du Projet

```
src-refactor/
├── app/                    # Structure principale Next.js App Router
│   ├── page.tsx            # Page d'accueil
│   ├── layout.tsx          # Layout racine
│   ├── providers.tsx       # Fournisseurs React (ThemeProvider, QueryClient, etc.)
│   ├── globals.css         # Styles globaux
│   ├── error.tsx           # Composant de gestion d'erreur
│   ├── global-error.tsx    # Composant de gestion d'erreur globale
│   └── not-found.tsx       # Page 404 en français
│
├── components/             # Composants React réutilisables
│   ├── layout/             # Composants de mise en page
│   │   ├── Navbar.tsx      # Barre de navigation
│   │   └── Footer.tsx      # Pied de page
│   │
│   ├── sections/           # Sections principales de la page d'accueil
│   │   ├── Hero.tsx        # Section héro
│   │   ├── Services.tsx    # Section services
│   │   ├── About.tsx       # Section à propos
│   │   ├── Gallery.tsx     # Section galerie
│   │   ├── Features.tsx    # Section caractéristiques
│   │   ├── Testimonials.tsx # Section témoignages
│   │   ├── Coaches.tsx     # Section coachs
│   │   ├── Pricing.tsx     # Section tarifs
│   │   └── CallToAction.tsx # Section appel à l'action
│   │
│   └── ui/                 # Composants d'interface utilisateur réutilisables
│       ├── button.tsx      # Composant bouton
│       ├── card.tsx        # Composant carte
│       └── ...             # Autres composants UI
│
└── tailwind.config.ts      # Configuration Tailwind CSS
```

## Points Clés de la Refactorisation

1. **Meilleure Organisation**: Structure claire séparant les composants de mise en page, les sections et les composants UI.

2. **Navigation Fluide**: Les attributs ID HTML sont maintenus pour la navigation par défilement:
   - `services` - Section Services
   - `pricing` - Section Tarifs
   - `coaches` - Section Coaching
   - `about` - Section À Propos
   - `gallery` - Section Galerie

3. **Intégration Instagram**: Une approche personnalisée avec une grille d'images et un bouton d'appel à l'action, évitant les problèmes des widgets iframe.

4. **Gestion d'Erreurs**: Composants dédiés pour les erreurs standards, critiques et pages non trouvées, tous en français.

5. **Contenu et Design**: Le contenu original est préservé, y compris:
   - Les tarifs de base (300 DH/1h30 en heure pleine, 240 DH/1h30 en heure creuse)
   - Les profils de coachs (Mehdi, Omar, Amine, Mustapha)
   - Les programmes pour enfants
   - L'intégration de réservation Cal.com

## Technologies

- Next.js avec App Router
- TypeScript
- Tailwind CSS
- lucide-react pour les icônes
- React Query pour la gestion de l'état
