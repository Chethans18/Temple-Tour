import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { NearbyPlace } from '../../utils/data';

interface NearbyPlaceCardProps {
  place: NearbyPlace;
}

const NearbyPlaceCard: React.FC<NearbyPlaceCardProps> = ({ place }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center shadow-md">
          <Star className="h-3 w-3 text-amber-500 mr-1" />
          <span className="text-xs font-medium">{place.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{place.name}</h3>
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
            {place.type}
          </span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 text-amber-500 mr-1" />
          <span className="text-sm">{place.distance}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {place.description}
        </p>
        <button className="mt-2 text-amber-600 dark:text-amber-400 text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default NearbyPlaceCard;