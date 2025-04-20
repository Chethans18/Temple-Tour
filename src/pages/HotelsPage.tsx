import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HotelCard from '../components/nearby/HotelCard';
import { hotels } from '../utils/data';

const HotelsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-700 dark:from-green-800 dark:to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Comfortable Stays Near Sacred Sites
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Find the perfect accommodation for your spiritual journey with options ranging from budget-friendly to luxury stays.
              </p>
            </div>
          </div>
        </section>
        
        {/* Hotels Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Featured Accommodations</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover comfortable places to stay during your temple visits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Booking Info Section */}
        <section className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Booking Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Important details to know before making your reservation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Peak Seasons</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Religious Festivals:</strong> Hotels near temples often get fully booked during major religious festivals and ceremonies.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Tourist Season:</strong> October to March is generally the peak tourist season in most places with higher rates.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Weekends:</strong> Expect higher rates and limited availability on weekends and holidays.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Booking Tips</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Book in Advance:</strong> Secure your accommodation at least 2-3 months ahead for peak seasons.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Confirm Amenities:</strong> Double-check if the hotel provides all the amenities you need, especially if traveling with family.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Check Cancellation Policies:</strong> Understand the hotel's cancellation and refund policies before booking.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelsPage;