import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';


export const Search = () => {
  const navigate = useNavigate();
  const [ text, setText ] = useState('');
  const { setSearchTerm } = useResultContext();

  return (
    <div className="relative sm:ml-48 md:ml-62 sm:-mt-4 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 mb-3 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
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
            if(text !== ''){
              setSearchTerm(text);
              navigate('/search');// Navigate to the "All" link
            }
        }}>
        🔎 
        </button>
      )}
      {text !== '' && <Links />}

      {/* {text === '' && newsResult && newsResult.articles && ( */}
        {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-wrap justify-between">
          {newsResult.articles.map((article, index) => (
            <div key={index} className="border p-4 rounded-lg transition-transform duration-300 hover:scale-105">
              <a href={article.urlToImage} target="_blank" rel="noopener noreferrer">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </a>
              <div className="mt-4">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-lg font-semibold hover:underline">{article.title}</h2>
                  <p className="mt-2 text-gray-600">{article.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div> */}
      {/* )} */}

    </div>
  );
}
