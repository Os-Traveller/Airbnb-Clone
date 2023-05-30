import { useState, FormEvent, Dispatch, SetStateAction, FC } from 'react';
import { toast } from 'react-hot-toast';
import Input from '../shared/Input';
import LoginGoogle from '../shared/LoginGoogle';
import LoginGithub from '../shared/LoginGithub';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface LoginProps {
  setSate: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ setSate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  // functions
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0 || !email.includes('@')) {
      toast.error('Login Failed', { duration: 1000 });
      return;
    }

    signIn('credentials', { email, password, redirect: false }).then((data) => {
      setSate(false);
      if (data?.ok) {
        toast.success('Login Successful', { duration: 1000 });
        router.refresh();
      } else {
        toast.error('Login Failed', { duration: 1000 });
      }
    });
  };

  return (
    <>
      <h1 className='text-xl font-bold mt-1 mb-3'>Welcome to Airbnb</h1>
      <form onSubmit={handleLogin}>
        <Input
          className='rounded-tr-lg rounded-tl-lg border-b-0'
          id='email'
          title='Email'
          state={email}
          setSate={setEmail}
        />
        <Input
          className='rounded-br-lg rounded-bl-lg'
          id='password'
          type='password'
          title='Password'
          state={password}
          setSate={setPassword}
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
