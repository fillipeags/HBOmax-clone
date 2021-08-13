const API_KEY = process.env.REACT_APP_API_KEY;

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchHBOOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=214`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventures: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};

export { baseImgUrl, requests };
