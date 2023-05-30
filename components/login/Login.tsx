import React from 'react';
import Input from '../shared/Input';

const Login = () => {
  return (
    <div className=''>
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
      </form>
    </div>
  );
};

export default Login;
