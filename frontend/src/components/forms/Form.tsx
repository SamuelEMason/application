import { FormEvent, ReactNode } from 'react';

interface FormProps {
	children: ReactNode;
	onSubmit: (e: FormEvent) => void;
	buttonLabel: string;
}

export default function Form({ children, onSubmit, buttonLabel }: FormProps) {
	return (
		<form
			onSubmit={(e: FormEvent) => onSubmit(e)}
			className='flex flex-col items-center w-full gap-8 pt-8 bg-slate-800'
		>
			{children}
			<button
				type='submit'
				className='w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-500 h-[2em]'
			>
				{buttonLabel}
			</button>
		</form>
	);
}
