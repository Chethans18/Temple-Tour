import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TempleCard from '../components/temple/TempleCard';
import TempleSearchBar from '../components/temple/TempleSearchBar';
import { temples } from '../utils/data';

const Home: React.FC = () => {
  const [filteredTemples, setFilteredTemples] = useState(temples);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredTemples(temples);
      return;
    }
    
    const lowerCaseSearch = searchTerm.toLowerCase();
    const results = temples.filter(
      temple => 
        temple.name.toLowerCase().includes(lowerCaseSearch) ||
        temple.location.toLowerCase().includes(lowerCaseSearch) ||
        temple.description.toLowerCase().includes(lowerCaseSearch)
    );
    
    setFilteredTemples(results);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center md:text-left md:max-w-2xl relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Discover Sacred Temples Worldwide
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Explore ancient temples, sacred sites, and spiritual places with our comprehensive guide.
              </p>
              <div className="mt-8">
                <TempleSearchBar onSearch={handleSearch} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent dark:from-purple-800 dark:to-transparent opacity-95"></div>
        </section>
        
        {/* Featured Temples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Temples</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover some of the most awe-inspiring and historically significant temples from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemples.map(temple => (
              <TempleCard key={temple.id} temple={temple} />
            ))}
            
            {filteredTemples.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No temples found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Temple Guide</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive information to enhance your temple exploration experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Detailed Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive details about history, architecture, timings, and visitor information.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Nearby Accommodations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find the best hotels and lodging options near sacred sites for a comfortable stay.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Maps
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Navigate easily with our detailed maps showing temple locations and nearby attractions.
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

export default Home;