import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {url: '/search', text: '🔎All'},
    {url: '/imagesearch', text: ' 📸Images'}
];

export const Links = () => (
    <div className='flex justify-center mt-4'>
        {links.map(({ url, text }, index) => (
            <NavLink
            key={index}
            to={url}
            className="nav-link" 
            exact
          >
          <span className='nav-text'>
              {text}
            </span>
          </NavLink>
          
        ))}
    </div>
);
