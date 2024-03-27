import { Link } from "react-router-dom";
import { capitalize } from "../../utils/utils";

const linkItems = ['register', 'login'];

interface MenuLinkProps {
	handleClose: () => void;
}

export default function MenuLinks({handleClose}: MenuLinkProps) {
	return (
		<div className='h-[15rem]'>
			<ul className='flex flex-col items-center justify-center w-full h-full gap-4'>
				{linkItems.map((item) => (
					<Link key={item} onClick={handleClose} to={item}>{capitalize(item)}</Link>
				))}
			</ul>
		</div>
	);
}
