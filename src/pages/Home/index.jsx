import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom';
import './index.css';
// https://api.themoviedb.org/3/movie/now_playing?api_key=cba10c6079a65e86599d6dc73b8dc94e&language=pt-BR

export default function Home() {
	const [filmes, setFilmes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadFilme() {
			const response = await api.get('movie/now_playing', {
				params: {
					api_key: 'cba10c6079a65e86599d6dc73b8dc94e',
					language: 'pt-BR',
					page: 1,
				},
			});
			// console.log(response.data.results.slice(0, 10));
			setFilmes(response.data.results.slice(0, 15));
			setLoading(false)
		}

		loadFilme();
	}, []);

	if (loading) {
		return (
			<div className='loading'>
				<h2>Carregando...</h2>
			</div>
		);
	} 

	return (
		<div className='container'>
			<div className='container-filme'>
				{filmes.map((filme) => {
					return (
						<article key={filme.id}>
							<strong>{filme.title}</strong>
							<img
								src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
								alt={filme.title}
							/>
							<Link to={`/filme/${filme.id}`}>Assistir</Link>
						</article>
					);
				})}
			</div>
		</div>
	);
}
