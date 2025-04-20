import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface TempleSearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const TempleSearchBar: React.FC<TempleSearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Trigger search on each keystroke
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative z-10">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search for temples, locations, or landmarks..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 
                     border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none 
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-3"
          aria-label="Search"
        >
          <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </form>
    </div>
  );
};

export default TempleSearchBar;