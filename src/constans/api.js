const MOVIEDB_ROOT = 'https://api.themoviedb.org/3/';
const MOVIEDB_API = `?api_key=${process.env.REACT_APP_API_KEY}`;

const MOVIES = 'movie/';
const TV = 'tv/';

// categoryes
const LATEST = 'latest';
const POPULAR = 'popular';
const TOP_RATED = 'top_rated';
const NOW_PLAYING = 'now_playing';
const ON_THE_AIR = 'on_the_air';

export const LANG = '&language=';
export const PAGE = '/&page=';

// images
export const POSTER_S = 'https://image.tmdb.org/t/p/w500/';
export const POSTER_B = 'https://image.tmdb.org/t/p/original/';

// movies
export const MOVIES_POPULAR = MOVIEDB_ROOT+MOVIES+POPULAR+MOVIEDB_API+`${LANG}ru`;
export const MOVIES_TOP_RATED = MOVIEDB_ROOT+MOVIES+TOP_RATED+MOVIEDB_API+`${LANG}ru`;
export const MOVIES_NOW_PLAYING = MOVIEDB_ROOT+MOVIES+NOW_PLAYING+MOVIEDB_API+`${LANG}ru`;

// tv
export const TV_POPULAR = MOVIEDB_ROOT+TV+POPULAR+MOVIEDB_API+`${LANG}ru`;
export const TV_TOP_RATED = MOVIEDB_ROOT+TV+TOP_RATED+MOVIEDB_API+`${LANG}ru`;
export const TV_ON_THE_AIR = MOVIEDB_ROOT+TV+ON_THE_AIR+MOVIEDB_API+`${LANG}ru`;