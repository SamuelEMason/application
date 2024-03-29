import { Route, Routes } from 'react-router';
import ConnectionListPage from './pages/ConnectionListPage';
import ConnectionPage from './pages/ConnectionPage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<main className='flex flex-col h-screen bg-cyan-950'>
			<Navbar />
			<Routes>
				<Route path='/connections/:id' element={<ConnectionPage />} />
				<Route path='/register' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/' element={<ConnectionListPage />} />
			</Routes>
		</main>
	);
}

export default App;
