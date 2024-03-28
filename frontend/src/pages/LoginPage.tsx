import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../components/Container';
import Form from '../components/forms/Form';
import FormControl from '../components/forms/FormControl';
import FormPageRedirect from '../components/forms/FormPageRedirect';

export default function LoginPage() {
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
				<h1 className='text-3xl'>Login</h1>
				<Form
					onSubmit={(e: FormEvent) => handleSubmit(e)}
					buttonLabel='Login'
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
				</Form>
				<FormPageRedirect label='login' />
			</div>
		</Container>
	);
}
