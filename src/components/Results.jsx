import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider'; 

export const Results = () => {
  const { getResults, getImgResults, results, isLoading, searchTerm} = useResultContext();
  const location = useLocation();  //gives url for /search, /imagesearch

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm !== '') {
      if(location.pathname === '/search'){
        getResults(`${location.pathname}?q=${searchTerm}&num=20`);
        // getResults(`${location.pathname}?q=suyashgaurav`)
      }
      if(location.pathname === '/imagesearch'){
        getImgResults(`${location.pathname}?q=${searchTerm}&num=10`);
        // getImgResults(`${location.pathname}?q=suyashgaurav`);
      }
    }
  }, [searchTerm, location.pathname]);
  
  // console.log(results);
  if(isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      if(results.length!==0  && results.data){  
        return (
          <div className="sm:px-56 flex flex-wrap gap-4 justify-between">
            <ul>
              {results.data.map((item, index) => (   //data sent by api
                <li key={index} className='transition-transform duration-300 hover:scale-105 mt-2'>
                  <div className="ml-4 rounded-lg border border-slate-700 p-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <p className="text-sm dark:text-blue-300 text-blue-700">
                        {item.url}
                      </p>
                      <p className="text-lg hover:underline">{item.title}</p>
                      <p className='text-sm text-justify'>{item.snippet}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      else {
        return (
          <div className="flex items-center justify-center mt-10 mr-10">
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <p className="text-xl font-semibold">Oops, something went wrong!</p>
              <p className="text-sm mt-2">Please try again later.</p>
            </div>
          </div>
        );
      }
    case '/imagesearch':  
      if (results.length !== 0 && results.items) {
        return (
          <div className="sm:px-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {results.items.map((items, index) => (    //items sent by api
              <div key={index} className="flex flex-col mt-2 items-center p-4 border rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105">
                <a href={items.originalImageUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={items.thumbnailImageUrl}
                    alt={items.title}
                    className="h-48 w-full object-cover rounded-lg"
                  />
                </a>
                <a href={items.contextLink} target="_blank" rel="noopener noreferrer">
                  <p className="text-sm dark:text-blue-300 text-blue-700 mt-2 hover:underline">
                    {items.title.length > 50 ? items.title.substring(0, 50) + '...' : items.title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        );        
    } 
    else {
        return (
          <div className="flex items-center justify-center mt-10 mr-10">
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <p className="text-xl font-semibold">Oops, something went wrong!</p>
              <p className="text-sm mt-2">Please try again later.</p>
            </div>
          </div>
        );
      }
    default:
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-red-500 text-white p-4 rounded-lg">
            <p className="text-xl font-semibold">Oops, something went wrong!</p>
            <p className="text-sm mt-2">Please try again later.</p>
          </div>
        </div>
      );
      }
}
