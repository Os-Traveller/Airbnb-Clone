import React from 'react';
import Container from '../shared/Container';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className='border-b py-4'>
      <Container className='flex justify-between items-center gap-3'>
        <Logo />
        <Search />
      </Container>
    </nav>
  );
};

export default Navbar;
