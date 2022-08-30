import Category from '../../components/category/Category';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, MOVIES_NOW_PLAYING } from '../../constans/api';

const MoviesPage = () => {
  const movies = [
    {title: 'Popular', url: MOVIES_POPULAR},
    {title: 'Now playing', url: MOVIES_NOW_PLAYING},
    {title: 'Top rated', url: MOVIES_TOP_RATED}];

  return (
    <section className="movies-page">
      {movies.map(({ title, url }) => (
        <Category 
          key={title}
          title={title}
          url={url}
        />
      ))}
    </section>
  );
}

export default MoviesPage;