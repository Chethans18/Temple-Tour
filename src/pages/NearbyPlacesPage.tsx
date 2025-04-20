import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NearbyPlaceCard from '../components/nearby/NearbyPlaceCard';
import { nearbyPlaces } from '../utils/data';

const NearbyPlacesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Nearby Attractions & Places of Interest
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Explore fascinating attractions, cultural sites, and natural wonders near famous temples.
              </p>
            </div>
          </div>
        </section>
        
        {/* Places Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Popular Attractions</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover interesting places to visit during your spiritual journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyPlaces.map(place => (
                <NearbyPlaceCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Tips for Visiting Attractions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Make the most of your visit with these helpful suggestions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Plan Your Time</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Research opening hours and allocate sufficient time to fully appreciate each attraction. Some sites may require several hours to explore properly.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Check Entrance Fees</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Many attractions have separate entrance fees. Carry sufficient cash or check if credit cards are accepted to avoid any inconvenience.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Weather Considerations</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Check the weather forecast before visiting outdoor attractions. Carry sunscreen, hats, and water during summer, or rain gear during monsoon season.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NearbyPlacesPage;