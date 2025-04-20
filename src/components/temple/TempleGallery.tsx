import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface TempleGalleryProps {
  images: string[];
}

const TempleGallery: React.FC<TempleGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg h-40 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size images */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:text-amber-500 transition-colors"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:text-amber-500 transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <img 
            src={images[currentImage]} 
            alt={`Full size image ${currentImage + 1}`}
            className="max-h-screen max-w-full p-4"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:text-amber-500 transition-colors"
            onClick={goToNext}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TempleGallery;