'use client';
import { useRef, useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../shared/Avatar';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Login from '../login/Login';
import Modal from '../shared/Modal';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);

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

  const showLoginModal = () => {
    setLoginModal(true);
    setIsMenuOpen(false);
  };

  return (
    <div className='center-y gap-4 relative'>
      <button className='hidden md:block'>Airbnb Your Home</button>
      <HiOutlineGlobeAlt className='hidden md:block' size={25} />

      {/* if menu hidden */}
      {!isMenuOpen && (
        <button
          className='border pr-1 pl-2 py-1 rounded-full center-y gap-3'
          onClick={showMenu}
        >
          <AiOutlineMenu size={20} />
          <Avatar image='/images/dp.jpg' />
        </button>
      )}

      {/* if menu shown */}
      {isMenuOpen && (
        <button
          className='border pl-2 pr-1 py-1 rounded-full center-y gap-3 shadow-md'
          onClick={hideMenu}
        >
          <AiOutlineMenu size={20} />
          <Avatar image='/images/dp.jpg' />
        </button>
      )}

      {/* menu items */}
      {isMenuOpen && (
        <div
          ref={ref}
          className='w-[200px] bg-white rounded-xl py-2 border absolute right-0 top-[50px] flex flex-col gap-2'
        >
          <MenuItem onClick={() => {}} label='Sign Up' />
          <MenuItem onClick={showLoginModal} label='Log In' />
          <div className='h-[1px] bg-neutral-200'>&nbsp;</div>
          <MenuItem onClick={() => {}} label='Airbnb Your Home' />
        </div>
      )}

      {/* login */}
      <Modal
        openModal={loginModal}
        setOpenModal={setLoginModal}
        title='Login or Sign Up'
      >
        <Login />
      </Modal>
    </div>
  );
};

export default UserMenu;
