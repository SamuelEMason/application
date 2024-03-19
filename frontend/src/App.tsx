import { Route, Routes } from 'react-router';
import ConnectionListPage from './pages/ConnectionListPage';
import ConnectionPage from './pages/ConnectionPage';
import Navbar from './components/Navbar';

function App() {
	return (
		<main className='min-h-screen bg-cyan-950'>
			<Navbar />
			<Routes>
				<Route path='/connections/:id' element={<ConnectionPage />} />
				<Route path='/' element={<ConnectionListPage />} />
			</Routes>
		</main>
	);
}

export default App;
