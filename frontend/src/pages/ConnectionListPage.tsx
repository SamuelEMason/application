import Container from '../components/container/Container';
import Searchbar from '../components/Searchbar';
import Messages from '../components/connections/Connections';

export default function ConnectionListPage() {
	return (
		<Container>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-3xl font-bold'>Messages</h1>
					<Searchbar />
				</div>
				<Messages />
			</div>
		</Container>
	);
}
