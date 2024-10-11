import { Link } from 'react-router-dom';
import './index.css';

export default function ErroPage() {
	return (
		<div className='error'>
			<h1>404</h1>
			<h2>Pagína não encontrada!</h2>
			<Link to='/'>Ver todos os filmes!</Link>
		</div>
	);
}
