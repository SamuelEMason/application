import { useParams } from 'react-router';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { type ConnectionType, mockConnections } from '../data/MockConnections';

export default function ConnectionPage() {
	const { id } = useParams();
	const [receiver, setReceiver] = useState<ConnectionType | undefined>();

	useEffect(() => {
		const filteredConnections: ConnectionType[] = mockConnections.filter(
			(r) => r.id === id
		);

		if (filteredConnections.length > 0) {
			setReceiver(filteredConnections[0]);
		} else {
			setReceiver(undefined);
		}
	}, [id, setReceiver]);

	return (
		<Container>
			<div className='px-8'>
				<h2 className='text-3xl font-bold'>{receiver?.name}</h2>
				<p>{receiver?.connection}</p>
			</div>
		</Container>
	);
}
