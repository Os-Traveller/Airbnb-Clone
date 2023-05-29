import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  image: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <Image
      className='rounded-full'
      src={image}
      alt='Avatar-Image'
      width={30}
      height={30}
    />
  );
};

export default Avatar;
