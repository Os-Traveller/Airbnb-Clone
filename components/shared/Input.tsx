import { FC, useState } from 'react';

interface InputProps {
  title: string;
  id: string;
  type?: string;
  required?: boolean;
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  const { title, id, type = 'text', required, className } = props;
  const [value, setValue] = useState<string>('');

  return (
    <div className={`w-full border px-4 py-2 ${className}`}>
      {value && (
        <label className='font-bold mb-1 text-lg text-neutral-400' htmlFor={id}>
          {title}
        </label>
      )}
      <input
        onChange={(e) => setValue(e.target.value)}
        className='w-full outline-none'
        type={type}
        placeholder={title}
        required={required}
      />
    </div>
  );
};

export default Input;
