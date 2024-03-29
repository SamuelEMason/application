import { CiSearch } from 'react-icons/ci';

export default function Searchbar() {
	return (
		<div className='relative flex items-center w-full h-8 gap-2 px-2 rounded-lg bg-slate-300'>
			<CiSearch className='text-xl text-black' />
			<input
				type='text'
				placeholder='Search'
				className='w-full text-black outline-none bg-slate-300 placeholder:text-neutral-500'
			/>
		</div>
	);
}
