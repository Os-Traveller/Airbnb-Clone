import React from 'react';

const Search = () => {
  return (
    <div className='border w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer py-2 pl-6 flex gap-4'>
      <p>Anywhere</p>
      <div className='h-full w-[1px] bg-gray-300'>&nbsp;</div>
      <p>Any Week</p>
      <div className='h-full w-[1px] bg-gray-300'>&nbsp;</div>
      <p>Add Guest</p>
    </div>
  );
};

export default Search;
