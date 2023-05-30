import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  image?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ image, size = 30 }) => {
  return (
    <div
      className='rounded-full overflow-hidden'
      style={{ height: size + 'px', width: size + 'px' }}
    >
      {image && (
        <Image src={image} alt='Avatar-Image' width={size} height={size} />
      )}
    </div>
  );
};

export default Avatar;
