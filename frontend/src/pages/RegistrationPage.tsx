import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../components/Container';
import FormControl from '../components/forms/FormControl';
import FormPageRedirect from '../components/forms/FormPageRedirect';

export default function RegistrationPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

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
				<form
					onSubmit={(e: FormEvent) => handleSubmit(e)}
					className='flex flex-col items-center w-full gap-8 pt-8 bg-slate-800'
				>
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
						className='w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-500 h-[2em]'
					>
						Submit
					</button>
				</form>
				<FormPageRedirect label='register' />
			</div>
		</Container>
	);
}
