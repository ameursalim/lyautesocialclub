"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

/**
 * Error component for handling runtime errors in the application
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Une erreur est survenue</h1>
        <p className="text-gray-600 mb-8">
          Nous nous excusons pour la gêne occasionnée. Notre équipe a été informée de ce problème.
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
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
