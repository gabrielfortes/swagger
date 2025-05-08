import React, { useState } from 'react';
import { FileText, Code, Settings } from 'lucide-react';
import SwaggerUI from './components/SwaggerUI';

function App() {
  const [activeTab, setActiveTab] = useState<'docs' | 'api' | 'settings'>('docs');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">API Documentation</h1>
            </div>
            <nav className="flex space-x-4">
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'docs'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('docs')}
              >
                <FileText className="mr-1.5 h-5 w-5" />
                Documentation
              </button>
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'api'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('api')}
              >
                <Code className="mr-1.5 h-5 w-5" />
                API Explorer
              </button>
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'settings'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="mr-1.5 h-5 w-5" />
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === 'docs' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API Documentation</h2>
            <p className="text-gray-600 mb-6">
              Welcome to the API documentation. This documentation provides information about the
              available API endpoints, request parameters, and response formats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication</h3>
                <p className="text-gray-600 mb-3">
                  Learn about the authentication mechanisms supported by the API.
                </p>
                <button 
                  onClick={() => setActiveTab('api')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Authentication Docs →
                </button>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Users API</h3>
                <p className="text-gray-600 mb-3">
                  Endpoints for managing user accounts and profiles.
                </p>
                <button 
                  onClick={() => setActiveTab('api')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Users API Docs →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && <SwaggerUI />}

        {activeTab === 'settings' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Server Selection</h3>
                <div className="mt-1">
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="production"
                  >
                    <option value="production">Production</option>
                    <option value="staging">Staging</option>
                    <option value="development">Development</option>
                  </select>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication</h3>
                <div className="flex items-center mt-2">
                  <input
                    id="remember_token"
                    name="remember_token"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember_token" className="ml-2 block text-sm text-gray-900">
                    Remember API token
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Theme</h3>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="light"
                      name="theme"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="light" className="ml-3 block text-sm font-medium text-gray-700">
                      Light
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="dark"
                      name="theme"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="dark" className="ml-3 block text-sm font-medium text-gray-700">
                      Dark
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="system"
                      name="theme"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="system" className="ml-3 block text-sm font-medium text-gray-700">
                      System preference
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;