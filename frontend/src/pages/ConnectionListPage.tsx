import Container from '../components/container/Container';
import Searchbar from '../components/Searchbar';
import Messages from '../components/connections/Connections';

export default function ConnectionListPage() {
	return (
		<Container>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4 px-8'>
					<h1 className='font-bold text-3xl'>Messages</h1>
					<Searchbar />
				</div>
				<Messages />
			</div>
		</Container>
	);
}
