import React from 'react';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className='font-semibold cursor-pointer hover:bg-neutral-100 px-5 transition'
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
