import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filme from '../pages/Filme';
import Home from '../pages/home';
import Header from '../components/header';
import ErroPage from '../pages/erro';
import Fav from '../pages/fav';

export default function RoutesApp() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/filme/:id' element={<Filme />} />
				<Route path='/favoritos' element={<Fav />} />

				<Route path='*' element={<ErroPage />} />
			</Routes>
		</BrowserRouter>
	);
}
