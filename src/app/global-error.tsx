'use client';

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
        <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Une erreur globale est survenue</h2>
            <p className="mb-8">
              Nous nous excusons pour ce problème. Veuillez essayer de rafraîchir la page.
            </p>
            <button
              onClick={() => reset()}
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
