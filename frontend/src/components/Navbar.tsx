import { BiMessageSquareEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Dropdown from './menu/Dropdown';

export default function Navbar() {
	return (
		<div className='flex justify-between items-center py-[1.75rem] px-[1.5rem] top-0 inset-x-0 bg-stone-900 h-12 ring-1 ring-stone-500 md:px-32 xl:px-56'>
			<Dropdown />
			<Link to={'/'}>
				<BiMessageSquareEdit color='gray' size={40} />
			</Link>
		</div>
	);
}
