import { useState, useEffect } from 'react';
import SwaggerUIReact from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow mb-6`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">API Documentation</h1>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 pb-12">
        <div className={`${isDarkMode ? 'swagger-ui-dark' : ''}`}>
          <SwaggerUIReact url={`${import.meta.env.BASE_URL}openapi.json`} />
        </div>
      </div>
      
      <style jsx>{`
        .swagger-ui-dark .swagger-ui {
          filter: invert(88%) hue-rotate(180deg);
        }

        .swagger-ui-dark .swagger-ui table,
        .swagger-ui-dark .swagger-ui .opblock-body pre.microlight,
        .swagger-ui-dark .swagger-ui .info,
        .swagger-ui-dark .swagger-ui .opblock-description-wrapper,
        .swagger-ui-dark .swagger-ui .opblock-summary-path,
        .swagger-ui-dark .swagger-ui .tab li {
          color: #f8f9fa !important;
        }
      `}</style>
    </div>
  );
};

export default SwaggerUI;
