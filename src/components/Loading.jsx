import React from 'react';
import { Rings } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Rings ariaLabel="rings-loading" color="#566cb3" height="80" width="80" radius="6"/>
    </div>
  )
}
