import { useState, useEffect } from 'react';
import SwaggerUIReact from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import openApiSpec from '../swagger/openapi.json';

const SwaggerUI = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for system dark mode preference
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
          <SwaggerUIReact spec={openApiSpec} />
        </div>
      </div>
      
      <style jsx>{`
        .swagger-ui-dark .swagger-ui,
        .swagger-ui-dark .swagger-ui .info .title,
        .swagger-ui-dark .swagger-ui .info,
        .swagger-ui-dark .swagger-ui .scheme-container,
        .swagger-ui-dark .swagger-ui section.models,
        .swagger-ui-dark .swagger-ui section.models.is-open h4,
        .swagger-ui-dark .swagger-ui .opblock .opblock-section-header,
        .swagger-ui-dark .swagger-ui .opblock .opblock-summary-method,
        .swagger-ui-dark .swagger-ui .tab li,
        .swagger-ui-dark .swagger-ui .opblock-tag,
        .swagger-ui-dark .swagger-ui .opblock .opblock-section-header h4,
        .swagger-ui-dark .swagger-ui .opblock .opblock-summary-path,
        .swagger-ui-dark .swagger-ui .opblock-description-wrapper p,
        .swagger-ui-dark .swagger-ui .opblock-external-docs-wrapper,
        .swagger-ui-dark .swagger-ui .opblock-title_normal,
        .swagger-ui-dark .swagger-ui table {
          color: #f8f9fa !important;
        }
        
        .swagger-ui-dark .swagger-ui {
          filter: invert(88%) hue-rotate(180deg);
        }
        
        .swagger-ui-dark .swagger-ui .opblock-body pre.microlight {
          filter: invert(100%) hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default SwaggerUI;