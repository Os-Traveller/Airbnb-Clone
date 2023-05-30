import React from 'react';
import { BsGithub } from 'react-icons/bs';

const LoginGithub = () => {
  return (
    <div className='w-full flex border border-black rounded-lg py-2 px-2'>
      <BsGithub className='text-[#1877F2]' size={25} />
      <h1 className='mx-auto font-semibold'>Continue With Google</h1>
    </div>
  );
};
export default LoginGithub;
