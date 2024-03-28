import { ChangeEvent } from "react";

interface FormControlProps {
	label: string;
	type: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
}

export default function FormControl({
	label,
	type,
	onChange,
	value,
}: FormControlProps) {
	return (
		<div className='flex flex-col items-center w-full gap-1'>
			<div className="w-2/3">
				<label>{label}</label>
			</div>
			<input
				type={type}
				onChange={onChange}
				value={value}
				className='text-white outline-none h-[2.5em] w-2/3 p-4 bg-black opacity-80'
			/>
		</div>
	);
}
