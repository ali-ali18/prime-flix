import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import api from '../../api/api';
import './index.css';

export default function Filme() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [filme, setFilme] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function renderizaFilme() {
			await api
				.get(`/movie/${id}`, {
					params: {
						api_key: 'cba10c6079a65e86599d6dc73b8dc94e',
						language: 'pt-BR',
					},
				})
				.then((response) => {
					setFilme(response.data);
					setLoading(false);
				})
				.catch(() => {
					navigate('/', { replace: true });
					return;
				});
		}

		renderizaFilme();

		return () => {
		};
	}, []);

	function salvarFilme() {
		const minhaLista = localStorage.getItem('@filmes');
		const filmesSalvos = JSON.parse(minhaLista) || [];

		const hasFilme = filmesSalvos.some(
			(filmeSalvo) => filmeSalvo.id === filme.id,
		);

		if (hasFilme) {
			toast.warn("O filme já está em sua lista!")
			return;
		}

		filmesSalvos.push(filme);

		localStorage.setItem('@filmes', JSON.stringify(filmesSalvos));
		toast.success("Filme salvo com sucesso")
	}

	if (loading) {
		return (
			<div className='filme-info'>
				<h1>Carregando detalhes do filme...</h1>
			</div>
		);
	}

	return (
		<div className='filme-info'>
			<h1>{filme.title}</h1>
			<img
				src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
				alt={filme.title}
			/>

			<h3>Sinopse</h3>
			<span>{filme.overview}</span>
			<strong>Avaliação: {filme.vote_average}/10</strong>

			<div className='area-acao'>
				<button onClick={salvarFilme} type='button'>
					Salvar
				</button>

				<a
					target='blank'
					rel='external'
					href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
				>
					Trailer
				</a>
			</div>
		</div>
	);
}
