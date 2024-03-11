import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [hello, setHello] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					'http://localhost:8000/hello'
				);
				if (response.status === 200) {
					setHello(response.data);
				} else {
					console.error(`HTTP error! Status: ${response.status}`);
				}
			} catch (err) {
				console.log('error');
			}
		})();
	}, []);

	return (
		<main>
			<h1>My Great Application</h1>
			<h3>{hello}</h3>
		</main>
	);
}

export default App;
