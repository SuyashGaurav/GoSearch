import React from 'react'

export const Footer = () => {
  return (
    <div className='text-center p-10 mt-10 border-t dark:bg-gray-800 dark:border-gray-700 bg-gray-50 border-gray-200'>
      <h1 className="text-gray-600 dark:text-gray-400 text-sm">
        &copy; 2023 GoSearch - A Google Search clone
      </h1>
      <div className="text-flex space-x-4 p-2 mt-1">
          <h1 className="text-gray-600 dark:text-gray-400 text-sm">Based on Google Search API</h1>
      </div>
    </div>
  );
}
