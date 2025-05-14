'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur sur le serveur
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">
          Nous nous excusons pour ce problème. Veuillez essayer de rafraîchir la page.
        </p>
        <button
          onClick={() => reset()}
          className="bg-brand-dark text-white px-6 py-3 rounded-full hover:bg-brand-accent transition-colors font-medium"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
