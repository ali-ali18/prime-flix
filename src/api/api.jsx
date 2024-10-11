import axios, { Axios } from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=cba10c6079a65e86599d6dc73b8dc94e&language=pt-BR
// base api: https://api.themoviedb.org/3/

const api = axios.create({ baseURL: ' https://api.themoviedb.org/3/' });

export default api