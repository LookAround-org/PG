
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <div className="text-center max-w-md px-4">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-charcoal mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. 
          The page might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link to="/" className="block">
            <Button className="w-full" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/explore" className="block">
            <Button variant="outline" className="w-full" size="lg">
              <Search className="h-4 w-4 mr-2" />
              Explore Properties
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
