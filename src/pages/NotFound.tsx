import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/30">
      <div className="text-center px-4 py-16 animate-fade-in">
        <h1 className="mb-4 text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-foreground">Page non trouvée</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour en arrière
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
