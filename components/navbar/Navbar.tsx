import React, { FC } from 'react';
import Container from '../shared/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { User } from '@prisma/client';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className='border-b py-3 bg-white'>
      <Container className='flex justify-between items-center gap-5'>
        <Logo />
        <Search />
        <UserMenu currentUser={currentUser} />
      </Container>
    </nav>
  );
};

export default Navbar;
