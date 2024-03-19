import { BiMessageSquareEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='flex justify-end items-center py-[1.75rem] px-[1.5rem] top-0 inset-x-0 bg-emerald-800 h-12 ring-1 ring-stone-500'>
			<Link to={'/'}>
				<BiMessageSquareEdit color='black' size={40} />
			</Link>
		</div>
	);
}
