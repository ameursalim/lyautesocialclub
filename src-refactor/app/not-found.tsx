import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

/**
 * Custom 404 Not Found page in French
 * Maintains language consistency with the rest of the site
 */
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-brand-accent mb-4">404</h1>
        <h2 className="text-4xl font-bold text-brand-dark mb-4">Page Non Trouvée</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. Veuillez vérifier l'URL ou retourner à l'accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-brand-dark text-white hover:bg-brand-accent"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
          >
            <Link href="/#services">
              <Search className="mr-2 h-4 w-4" />
              Explorer les services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
