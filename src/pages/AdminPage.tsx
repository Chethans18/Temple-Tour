import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TempleList from '../components/admin/TempleList';
import TempleEditForm from '../components/admin/TempleEditForm';
import { temples } from '../utils/data';

const AdminPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTemple, setSelectedTemple] = useState(temples[0]);
  
  const handleEdit = (id: string) => {
    const temple = temples.find(t => t.id === id);
    if (temple) {
      setSelectedTemple(temple);
      setIsEditing(true);
    }
  };
  
  const handleDelete = (id: string) => {
    // In a real app, this would call an API to delete the temple
    alert(`Temple ${id} would be deleted in a real application`);
  };
  
  const handleView = (id: string) => {
    window.open(`/temples/${id}`, '_blank');
  };
  
  const handleSave = (temple: any) => {
    // In a real app, this would call an API to save the temple
    alert(`Temple ${temple.id} would be updated in a real application`);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage temples, nearby places, and hotels
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                onClick={() => {
                  // In a real app, this would create a new temple template
                  alert('Create new temple functionality would be implemented in a real application');
                }}
              >
                Add New Temple
              </button>
            </div>
          </div>
          
          {isEditing ? (
            <TempleEditForm 
              temple={selectedTemple} 
              onSave={handleSave} 
              onCancel={handleCancel} 
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Temples
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  Manage temple information, edit details, or remove temples from the database.
                </p>
              </div>
              <TempleList 
                temples={temples} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
                onView={handleView} 
              />
            </div>
          )}
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Recent Activity
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Temple Updated</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Golden Temple information was updated by admin
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">New Hotel Added</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          New hotel "Angkor Paradise" was added near Angkor Wat
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">User Registered</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          New user registered: john.doe@example.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Quick Actions
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Manage User Accounts
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    View Website Analytics
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Update Site Settings
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Review Feedback Messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPage;