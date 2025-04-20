import React from 'react';
import { MapPin, Star, Phone, Mail } from 'lucide-react';
import { Hotel } from '../../utils/data';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={hotel.imageUrl} 
          alt={hotel.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center shadow-md">
          <Star className="h-3 w-3 text-amber-500 mr-1" />
          <span className="text-xs font-medium">{hotel.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{hotel.name}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 text-amber-500 mr-1" />
          <span className="text-sm">{hotel.distance}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {hotel.description}
        </p>
        <div className="text-green-600 dark:text-green-400 font-medium mb-3">
          {hotel.priceRange}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {hotel.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
          {hotel.amenities.length > 3 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
              +{hotel.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
            <Phone className="h-4 w-4 text-amber-500 mr-2" />
            <span>{hotel.contactPhone}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Mail className="h-4 w-4 text-amber-500 mr-2" />
            <span>{hotel.contactEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;