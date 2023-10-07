import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider'; 

export const Results = () => {
  const { getResults, results, isLoading, searchTerm} = useResultContext();
  const location = useLocation();  //gives url for /search, /imagesearch

  // useEffect(() => {
  //   // if (searchTerm !== '') {
  //       // getResults(`${location.pathname}?q=${searchTerm}&num=10`);
  //     getResults(`${location.pathname}?q=suyashgaurav`)
  //   // }
  // }, [searchTerm, location.pathname]);
  console.log(results);

  if(isLoading) return <Loading />

  // console.log(location.pathname)

  switch (location.pathname) {
    case '/search':
      if(results.length!==0  && results.data){  
        return (
          <div className="sm:px-56 flex flex-wrap gap-4 justify-between">
            <ul>
              {results.data.map((item, index) => (
                <li key={index}>
                  <div className="ml-4 rounded-lg border border-slate-700 p-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <p className="text-sm dark:text-blue-300 text-blue-700">
                        {item.url.substring(0, 50)}
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
      else{
        return "Error!!";
      }
    default:
      return 'ERROR!!';
  }
}
