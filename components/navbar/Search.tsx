import { BiSearch } from 'react-icons/bi';
const Search = () => {
  return (
    <div className='border w-fit rounded-full shadow-sm hover:shadow-md transition cursor-pointer py-2 md:pl-4 md:pr-2 px-2 center-y gap-4'>
      <p className='font-semibold text-sm lg:block hidden'>Anywhere</p>
      <div className='h-full w-[1px] bg-gray-300 hidden lg:block'>&nbsp;</div>
      <p className='font-semibold text-sm lg:block hidden'>Any Week</p>
      <div className='h-full w-[1px] bg-gray-300 hidden lg:block'>&nbsp;</div>
      <p className='text-sm lg:block hidden'>Add Guest</p>
      <div className='p-2 bg-rose-500 text-white rounded-full'>
        <BiSearch size={20} />
      </div>
    </div>
  );
};

export default Search;
