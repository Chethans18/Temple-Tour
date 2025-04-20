import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Landmark className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                Temple Guide
              </span>
            </div>
            <p className="mt-2 text-sm">
              Discover sacred temples and cultural heritage sites around the world.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider">
              Explore
            </h3>
            <div className="mt-4 space-y-2">
              <Link to="/" className="block text-sm hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link to="/temples" className="block text-sm hover:text-amber-500 transition-colors">
                Popular Temples
              </Link>
              <Link to="/nearby" className="block text-sm hover:text-amber-500 transition-colors">
                Nearby Places
              </Link>
              <Link to="/hotels" className="block text-sm hover:text-amber-500 transition-colors">
                Hotels
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <div className="mt-4 space-y-2">
              <Link to="/privacy" className="block text-sm hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm hover:text-amber-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block text-sm hover:text-amber-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                <span>123 Temple Street, Sacred City</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-amber-500" />
                <span>info@templeguide.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Temple Guide. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Made with ❤️ for sacred journeys
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;