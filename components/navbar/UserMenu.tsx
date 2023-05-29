'use client';
import { useRef, useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../shared/Avatar';
import { useState } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // to track outside click from a component
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // functions //
  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  const showMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className='center-y gap-4 relative'>
      <button>Airbnb Your Home</button>
      <HiOutlineGlobeAlt size={20} />
      {/* if menu hidden */}
      {!isMenuOpen && (
        <button
          className='border px-3 py-1 rounded-full center-y gap-3'
          onClick={showMenu}
        >
          <AiOutlineMenu size={20} />
          <Avatar image='/images/placeholder.jpg' />
        </button>
      )}
      {/* if menu shown */}
      {isMenuOpen && (
        <button
          className='border px-3 py-1 rounded-full center-y gap-3 shadow-md'
          onClick={hideMenu}
        >
          <AiOutlineMenu size={20} />
          <Avatar image='/images/placeholder.jpg' />
        </button>
      )}
      {/* nav items */}
      {isMenuOpen && (
        <div
          ref={ref}
          className='w-[200px] bg-white rounded-xl py-2 border absolute right-0 top-[50px] flex flex-col gap-2'
        >
          <MenuItem onClick={() => {}} label='Sign Up' />
          <MenuItem onClick={() => {}} label='Log In' />
          <div className='h-[1px] bg-neutral-200'>&nbsp;</div>
          <MenuItem onClick={() => {}} label='Airbnb Your Home' />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
