import React, { useState } from 'react';
import { Temple } from '../../utils/data';

interface TempleEditFormProps {
  temple: Temple;
  onSave: (temple: Temple) => void;
  onCancel: () => void;
}

const TempleEditForm: React.FC<TempleEditFormProps> = ({ temple, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Temple>({...temple});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        {temple.id ? 'Edit Temple' : 'Add New Temple'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Temple Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="timings" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Timings
            </label>
            <input
              type="text"
              id="timings"
              name="timings"
              value={formData.timings}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="entryFee" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Entry Fee
            </label>
            <input
              type="text"
              id="entryFee"
              name="entryFee"
              value={formData.entryFee}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Phone
            </label>
            <input
              type="text"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-2">
            <label htmlFor="history" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              History
            </label>
            <textarea
              id="history"
              name="history"
              value={formData.history}
              onChange={handleChange}
              rows={4}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Main Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="ruler" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ruler/Dynasty
            </label>
            <input
              type="text"
              id="ruler"
              name="ruler"
              value={formData.ruler}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300
                     bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                     hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white
                     bg-amber-600 border border-transparent rounded-md shadow-sm hover:bg-amber-700
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Save Temple
          </button>
        </div>
      </form>
    </div>
  );
};

export default TempleEditForm;