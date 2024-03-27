import { useEffect, useState } from 'react';
import { type ConnectionType, mockConnections } from '../../data/MockConnections';
import Connection from './Connection';

export default function Connections() {
	const [connections, setConnections] = useState<ConnectionType[]>([]);

	useEffect(() => {
		setConnections(mockConnections);
	}, []);

	return (
		<div className='w-full'>
			{connections.map((connection: ConnectionType) => (
				<Connection
					key={connection.connID}
					name={connection.name}
					time={connection.time}
					connection={connection.connection}
					id={connection.connID}
				/>
			))}
		</div>
	);
}
