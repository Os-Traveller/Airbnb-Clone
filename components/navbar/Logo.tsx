import React from 'react';
import { TbBrandAirbnb } from 'react-icons/tb';
import { Andika } from 'next/font/google';

const font = Andika({ subsets: ['latin'], weight: ['700'] });

const Logo = () => {
  return (
    <div className='text-rose-500 font-semibold center-y gap-2'>
      <TbBrandAirbnb size={30} />
      <h1 className={`${font.className} text-2xl`}>airbnb</h1>
    </div>
  );
};

export default Logo;
