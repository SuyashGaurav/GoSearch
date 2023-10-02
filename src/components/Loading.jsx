import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <MagnifyingGlass ariaLabel="MagnifyingGlass-loading" glassColor='#c0efff' color='#e15b64' height="80" width="80" />
    </div>
  )
}
