export const MOVIEDB_ROOT = 'https://api.themoviedb.org/3/';
export const MOVIEDB_API = `?api_key=${process.env.REACT_APP_API_KEY}`;

export const MOVIES = 'movie/';
export const SERIES = 'tv/';
export const SEARCH = 'search/';
export const ALL = 'all/';
// export const MULTI = 'multi/';

export const VIDEOS = '/videos';

// categoryes
export const LATEST = 'latest';
export const POPULAR = 'popular';
export const TOP_RATED = 'top_rated';
export const TRANDING = 'trending/';
// categoryes movies
export const NOW_PLAYING = 'now_playing';
export const UPCOMING = 'upcoming';
// categoryes series
export const ON_THE_AIR = 'on_the_air';
export const AIRING_TODAY = 'airing_today';


export const LANG = '&language=';
export const PAGE_ROOT = '&page=';
export const QUERY = '&query=';

export const DAY = 'day';
export const WEEK= 'week';

// Languages
export const RU = 'ru';

// images
export const POSTER_S = 'https://image.tmdb.org/t/p/w500/';
export const POSTER_B = 'https://image.tmdb.org/t/p/original/';

// movies
export const MOVIES_POPULAR = MOVIEDB_ROOT+MOVIES+POPULAR+MOVIEDB_API+LANG+RU;
export const MOVIES_TOP_RATED = MOVIEDB_ROOT+MOVIES+TOP_RATED+MOVIEDB_API+LANG+RU;
export const MOVIES_NOW_PLAYING = MOVIEDB_ROOT+MOVIES+NOW_PLAYING+MOVIEDB_API+LANG+RU;
export const MOVIES_UPCOMING = MOVIEDB_ROOT+MOVIES+UPCOMING+MOVIEDB_API+LANG+RU;

// SERIES
export const SERIES_POPULAR = MOVIEDB_ROOT+SERIES+POPULAR+MOVIEDB_API+LANG+RU;
export const SERIES_TOP_RATED = MOVIEDB_ROOT+SERIES+TOP_RATED+MOVIEDB_API+LANG+RU;
export const SERIES_ON_THE_AIR = MOVIEDB_ROOT+SERIES+ON_THE_AIR+MOVIEDB_API+LANG+RU;
export const SERIES_AIRING_TODAY = MOVIEDB_ROOT+SERIES+AIRING_TODAY+MOVIEDB_API+LANG+RU;