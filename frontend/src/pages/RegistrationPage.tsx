import { useState } from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import FormControl from '../components/forms/FormControl';

export default function RegistrationPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (email && password) {
			console.log({
				email,
				password,
			});
			navigate('/');
		}
	};

	return (
		<Container>
			<div className='flex flex-col items-center justify-center w-full gap-8 p-16'>
				<h1 className='text-3xl'>Register</h1>
				<div className='flex flex-col items-center w-full gap-8 pt-8 bg-slate-800'>
					<FormControl
						label='Email Address'
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<FormControl
						label='Password'
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<button
						type='submit'
						onClick={handleSubmit}
						className='w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-500 h-[2em]'
					>
						Submit
					</button>
				</div>
				<p className='-mt-4 text-sm text-white text-opacity-65'>
					already have an account?{' '}
					<Link to='/login' className='text-blue-400'>
						click to login
					</Link>
				</p>
			</div>
		</Container>
	);
}
