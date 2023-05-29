import React from 'react';
import Container from '../shared/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <nav className='border-b py-3 bg-white'>
      <Container className='flex justify-between items-center gap-3'>
        <Logo />
        <Search />
        <UserMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
