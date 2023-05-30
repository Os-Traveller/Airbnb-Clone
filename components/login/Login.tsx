import React from 'react';
import Input from '../shared/Input';
import LoginGoogle from '../shared/LoginGoogle';
import LoginGithub from '../shared/LoginGithub';

const Login = () => {
  return (
    <>
      <h1 className='text-xl font-bold mt-1 mb-3'>Welcome to Airbnb</h1>
      <form action=''>
        <Input
          className='rounded-tr-lg rounded-tl-lg border-b-0'
          id='email'
          title='Email'
        />
        <Input
          className='rounded-br-lg rounded-bl-lg'
          id='password'
          type='password'
          title='Password'
        />
        <button className='bg-rose-500 text-white font-semibold py-2 px-5 rounded-lg mt-5 w-full transition duration-300 hover:bg-rose-600 '>
          Login
        </button>

        <div className='my-5 center-y gap-3'>
          <div className='h-[1px] w-full bg-neutral-300'>&nbsp;</div>
          or
          <div className='h-[1px] w-full bg-neutral-300'>&nbsp;</div>
        </div>
        <div className='flex flex-col gap-3'>
          <LoginGoogle />
          <LoginGithub />
        </div>
      </form>
    </>
  );
};

export default Login;
