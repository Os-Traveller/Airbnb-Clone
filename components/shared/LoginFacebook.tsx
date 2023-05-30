import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

const LoginFacebook = () => {
  return (
    <div className='w-full flex border border-black rounded-lg py-2 px-2'>
      <FaFacebookSquare className='text-[#1877F2]' size={25} />
      <h1 className='mx-auto font-semibold'>Continue With Google</h1>
    </div>
  );
};
export default LoginFacebook;
