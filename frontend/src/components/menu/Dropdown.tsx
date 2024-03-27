import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import Menu from './Menu';
import MenuLinks from './MenuLinks';

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button onClick={() => setIsOpen((prevState) => !prevState)}>
				{!isOpen && <LuMenu color='black' size={40} />}
			</button>
			<Menu isOpen={isOpen} handleClose={handleClose}>
				<MenuLinks handleClose={handleClose} />
			</Menu>
		</div>
	);
}
