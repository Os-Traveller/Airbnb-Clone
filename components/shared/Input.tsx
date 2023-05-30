import { FC, useState, Dispatch, SetStateAction } from 'react';

interface InputProps {
  title: string;
  id: string;
  type?: string;
  className?: string;
  state: string;
  setSate: Dispatch<SetStateAction<string>>;
}

const Input: FC<InputProps> = (props) => {
  const { title, id, type = 'text', className, state, setSate } = props;

  return (
    <div className={`w-full border px-4 py-2 ${className}`}>
      {state && (
        <label className='font-bold mb-1 text-lg text-neutral-400' htmlFor={id}>
          {title}
        </label>
      )}
      <input
        onChange={(e) => setSate(e.target.value)}
        className='w-full outline-none'
        type={type}
        placeholder={title}
      />
    </div>
  );
};

export default Input;
