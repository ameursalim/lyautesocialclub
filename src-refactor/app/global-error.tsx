"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

/**
 * Global error component for handling critical errors in the application
 * Used when the entire app context fails to load
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Erreur Critique</h1>
            <p className="text-gray-600 mb-8">
              Une erreur inattendue s'est produite. Nous travaillons à résoudre ce problème.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => reset()}
                className="bg-brand-dark text-white hover:bg-brand-accent"
              >
                Réessayer
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
              >
                <a href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </a>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
