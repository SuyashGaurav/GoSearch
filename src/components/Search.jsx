import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';


export const Search = () => {
  const navigate = useNavigate();

  const [ text, setText ] = useState('');
  const { setSearchTerm } = useResultContext();

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🧿 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.target.value !== '' && e.key === 'Enter') { // Check if e is not null before accessing e.key
            document.getElementById('search-button').click();
          }
        }}
      />
      {text !== '' && (
        <button id="search-button" type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " 
          onClick={() => {
          setSearchTerm(text);
          navigate('/search'); // Navigate to the "All" link
        }}>
        🔎 
        </button>
      )}
      <Links />
    </div>
  );
}
