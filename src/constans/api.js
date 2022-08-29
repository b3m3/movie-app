const MOVIEDB_ROOT = 'https://api.themoviedb.org/3/';
const MOVIEDB_API = `?api_key=${process.env.REACT_APP_API_KEY}`;

const MOVIES = 'movie/';
const TV = 'tv/';

// categoryes
const LATEST = 'latest';
const POPULAR = 'popular';
const TOP_RATED = 'top_rated';
const NOW_PLAYUNG = 'now_playing';

export const LANG = '&language=';
export const PAGE = '/&page=';

// images
export const POSTER_S = 'https://image.tmdb.org/t/p/w500/';
export const POSTER_B = 'https://image.tmdb.org/t/p/original/';

// movies
export const MOVIES_POPULAR = MOVIEDB_ROOT+MOVIES+POPULAR+MOVIEDB_API;
