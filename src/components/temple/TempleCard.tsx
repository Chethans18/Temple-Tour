import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Temple } from '../../utils/data';

interface TempleCardProps {
  temple: Temple;
}

const TempleCard: React.FC<TempleCardProps> = ({ temple }) => {
  return (
    <Link 
      to={`/temples/${temple.id}`} 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 block"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={temple.imageUrl} 
          alt={temple.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{temple.name}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 text-purple-500 mr-1" />
          <span className="text-sm">{temple.location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
          {temple.description}
        </p>
        <div className="mt-auto">
          <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
            Open Daily
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TempleCard;