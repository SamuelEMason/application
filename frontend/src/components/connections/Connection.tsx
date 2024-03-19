import { Link } from 'react-router-dom';

interface ConnectionProps {
	name: string;
	connection: string;
	time: string;
	icon?: string;
	id: string;
}

export default function Connection({ name, connection, time, id }: ConnectionProps) {
	return (
		<Link to={`/connections/${id}`}>
			<div className='hover:bg-slate-600'>
				<div className='flex items-center gap-4 w-full py-[1rem] px-8'>
					<div className='flex justify-center items-center flex-shrink-0 w-12 h-12 rounded-full bg-slate-500'>
						<span>{name[0]}</span>
					</div>
					<div className='flex flex-col w-full'>
						<div className='flex justify-between'>
							<h3 className='font-bold text-lg'>{name}</h3>
							<h6 className='text-sm text-white text-opacity-50'>
								{time}
							</h6>
						</div>
						<div className='text-white text-opacity-70'>
							{connection}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
