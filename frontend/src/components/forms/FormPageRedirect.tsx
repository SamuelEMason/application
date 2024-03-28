import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';

interface FormPageRedirectProps {
	label: string;
}

export default function FormPageRedirect({ label }: FormPageRedirectProps) {
	const fullLabel =
		(label === 'login'
			? "Don't "
			: label === 'register'
			? 'Already '
			: '') + 'have an account? ';

	const oppositeLabel =
		label === 'login' ? 'register' : label === 'register' ? 'login' : '';

	const redirectURL =
		label === 'login' ? '/register' : label === 'register' ? '/login' : '';

	return (
		<p className='-mt-6 text-sm text-white text-opacity-45'>
			{fullLabel}

			<Link
				to={redirectURL}
				className='text-blue-400 text-opacity-75 hover:underline'
			>
				Click to {capitalize(oppositeLabel)}
			</Link>
		</p>
	);
}
