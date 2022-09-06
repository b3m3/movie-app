import Gallery from '../../components/gallery/Gallery';

import { MOVIES_POPULAR, MOVIES_TOP_RATED, MOVIES_NOW_PLAYING } from '../../constans/api';

const Movies = () => {
  const movies = [
    {title: 'Popular', url: MOVIES_POPULAR},
    {title: 'Now playing', url: MOVIES_NOW_PLAYING},
    {title: 'Top rated', url: MOVIES_TOP_RATED}];
  
  return (
    <section className="movies">
      {movies.map(({ title, url }) => (
        <Gallery 
          key={title}
          title={title}
          url={url}
        />))}
    </section>
  );
}

export default Movies;