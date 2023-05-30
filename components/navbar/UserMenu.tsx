'use client';
import { useRef, useEffect, FC } from 'react';
import { signOut } from 'next-auth/react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../shared/Avatar';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Login from '../login/Login';
import Modal from '../shared/Modal';
import SignUp from '../sign_up/SignUp';
import { User } from '@prisma/client';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signUpModal, setSignUpModal] = useState<boolean>(false);

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

  const showSignUpModal = () => {
    setSignUpModal(true);
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
          {currentUser ? (
            <>
              <MenuItem onClick={() => {}} label='My Trips' />
              <MenuItem onClick={() => {}} label='MY Favorite' />
              <MenuItem onClick={() => {}} label='MY Reservations' />
              <MenuItem onClick={() => {}} label='Airbnb My Home' />
              <hr />
              <MenuItem onClick={() => signOut()} label='Logout' />
            </>
          ) : (
            <>
              <MenuItem onClick={showSignUpModal} label='Sign Up' />
              <MenuItem onClick={showLoginModal} label='Log In' />
              <hr />
              <MenuItem onClick={() => {}} label='Airbnb Your Home' />
            </>
          )}
        </div>
      )}

      <>
        {/* login modal*/}
        <Modal
          openModal={loginModal}
          setOpenModal={setLoginModal}
          title='Login'
        >
          <Login setSate={setLoginModal} />
        </Modal>
        {/* sign up modal */}
        <Modal
          openModal={signUpModal}
          setOpenModal={setSignUpModal}
          title='Sign Up'
        >
          <SignUp setState={setSignUpModal} />
        </Modal>
      </>
    </div>
  );
};

export default UserMenu;
