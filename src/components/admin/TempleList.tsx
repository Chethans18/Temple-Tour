import React from 'react';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { Temple } from '../../utils/data';

interface TempleListProps {
  temples: Temple[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const TempleList: React.FC<TempleListProps> = ({ temples, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Temple
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Entry Fee
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
          {temples.map((temple) => (
            <tr key={temple.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img className="h-10 w-10 rounded-full object-cover" src={temple.imageUrl} alt={temple.name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{temple.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 dark:text-gray-300">{temple.location}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 dark:text-gray-300">{temple.entryFee}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button 
                  onClick={() => onView(temple.id)} 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center mr-3"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </button>
                <button 
                  onClick={() => onEdit(temple.id)} 
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 inline-flex items-center mr-3"
                >
                  <Pencil className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(temple.id)} 
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 inline-flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TempleList;