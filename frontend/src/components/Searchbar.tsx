import { CiSearch } from 'react-icons/ci';

export default function Searchbar() {
	return (
		<div className='flex items-center h-8 px-2 gap-2 relative w-full rounded-lg bg-slate-200'>
			<CiSearch className='text-black text-xl' />
			<input
				type='text'
				placeholder='Search'
				className='w-full outline-none text-black bg-slate-200 placeholder:text-neutral-500'
			/>
		</div>
	);
}
