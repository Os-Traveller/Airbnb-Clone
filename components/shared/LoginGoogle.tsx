import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginGoogle = () => {
  return (
    <div className='w-full flex border border-black rounded-lg py-2 px-2'>
      <FcGoogle size={25} />
      <h1 className='mx-auto font-semibold'>Continue With Google</h1>
    </div>
  );
};
export default LoginGoogle;
