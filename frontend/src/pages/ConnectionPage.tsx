import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../components/container/Container';
import MessageWindow from '../components/messages/MessageWindow';
import { mockConnections, type ConnectionType } from '../data/MockConnections';

export default function ConnectionPage() {
	const { id } = useParams();
	const [connection, setConnection] = useState<ConnectionType>({
		connID: '0',
		name: '',
		connection: '',
		time: '',
		icon: '',
	});

	useEffect(() => {
		const filteredConnections: ConnectionType[] = mockConnections.filter(
			(r) => r.connID === id
		);

		if (filteredConnections.length > 0) {
			setConnection(filteredConnections[0]);
		}
	}, [id, setConnection]);

	return (
		<Container>
			<div className='flex flex-col gap-4'>
				<h2 className='text-3xl font-bold'>{connection?.name}</h2>
				<MessageWindow connection={connection} />
			</div>
		</Container>
	);
}
