import { BiSearch } from 'react-icons/bi';
const Search = () => {
  return (
    <div className='border w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer py-2 pl-4 pr-2 center-y gap-4'>
      <p className='font-semibold'>Anywhere</p>
      <div className='h-full w-[1px] bg-gray-300'>&nbsp;</div>
      <p className='font-semibold'>Any Week</p>
      <div className='h-full w-[1px] bg-gray-300'>&nbsp;</div>
      <p>Add Guest</p>
      <div className='p-2 bg-rose-500 text-white rounded-full'>
        <BiSearch size={20} />
      </div>
    </div>
  );
};

export default Search;
