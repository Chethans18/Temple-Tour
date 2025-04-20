import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TempleGallery from '../components/temple/TempleGallery';
import { temples, nearbyPlaces, hotels } from '../utils/data';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, History, Crown } from 'lucide-react';
import NearbyPlaceCard from '../components/nearby/NearbyPlaceCard';
import HotelCard from '../components/nearby/HotelCard';

const TempleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const temple = temples.find(t => t.id === id);

  if (!temple) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Temple Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The temple you're looking for doesn't exist or may have been removed.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
            >
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter related nearby places and hotels based on temple
  const relatedNearbyPlaces = nearbyPlaces.filter(place => 
    place.distance.includes(temple.name) || Math.random() > 0.5
  ).slice(0, 3);
  
  const relatedHotels = hotels.filter(hotel => 
    hotel.distance.includes(temple.name) || Math.random() > 0.5
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={temple.imageUrl} 
            alt={temple.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{temple.name}</h1>
              <p className="text-xl opacity-90 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {temple.location}
              </p>
            </div>
          </div>
        </div>
        
        {/* Temple Details */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About the Temple</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {temple.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <History className="h-5 w-5 mr-2 text-amber-500" />
                    Historical Background
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {temple.history}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-amber-500" />
                    Ruler & Dynasty
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Built during the reign of {temple.ruler}. The temple stands as a testament to 
                    the architectural brilliance and spiritual devotion of the era.
                  </p>
                  
                  <TempleGallery images={temple.galleryImages} />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Opening Hours</h4>
                        <p className="text-gray-600 dark:text-gray-400">{temple.timings}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Entry Fee</h4>
                        <p className="text-gray-600 dark:text-gray-400">{temple.entryFee}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sponsors</h4>
                        <p className="text-gray-600 dark:text-gray-400">{temple.sponsors.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Information</h4>
                      
                      <div className="flex items-center mt-2">
                        <Phone className="h-4 w-4 text-amber-500 mr-2" />
                        <a href={`tel:${temple.contactPhone}`} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                          {temple.contactPhone}
                        </a>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <Mail className="h-4 w-4 text-amber-500 mr-2" />
                        <a href={`mailto:${temple.contactEmail}`} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                          {temple.contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {/* Map placeholder - in a real app, implement a map using Google Maps or similar */}
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Interactive map would be displayed here</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <a 
                      href={`https://www.google.com/maps?q=${temple.latitude},${temple.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nearby Places */}
            <div className="mt-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Nearby Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNearbyPlaces.map(place => (
                  <NearbyPlaceCard key={place.id} place={place} />
                ))}
              </div>
            </div>
            
            {/* Nearby Hotels */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Where to Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedHotels.map(hotel => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/hotels"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
                >
                  View All Accommodations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TempleDetailPage;