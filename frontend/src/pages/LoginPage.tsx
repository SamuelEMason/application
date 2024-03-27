import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
				<h1 className='text-3xl'>Login</h1>
				<div className='flex flex-col items-center w-full gap-8 pt-8 bg-slate-800'>
					<div className='flex flex-col items-center w-full gap-1'>
						<div className='w-2/3'>
							<label>Email Address</label>
						</div>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							className='text-black outline-none h-[2em] w-2/3 p-4'
						/>
					</div>
					<div className='flex flex-col items-center w-full gap-1'>
						<div className='w-2/3'>
							<label>Password</label>
						</div>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							className='text-black outline-none h-[2em] w-2/3 p-4'
						/>
					</div>
					<button
						type='submit'
						onClick={handleSubmit}
						className='w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-500 h-[2em]'
					>
						Submit
					</button>
				</div>
				<p className='-mt-4 text-sm text-white text-opacity-65'>
					dont have an account? <Link to='/register' className="text-blue-400">click to register</Link>
				</p>
			</div>
		</Container>
	);
}
